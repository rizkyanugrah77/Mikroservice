const apiAdaptor = require('../../apiAdaptor');

const {
    URL_SERVICE_COURSE,
    HOSTNAME
} = process.env; //variable config

const api = apiAdaptor(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const course = await api.get('/api/courses', {
            params: {
                ...req.query,
                status: "published"
            }
        });

        // mengubah url dari bawaan port 8000 to 3000
        const coursesData = course.data;
        const firstPage = coursesData.data.first_page_url.split('?').pop();
        const lastPage = coursesData.data.last_page_url.split('?').pop();

        // inject to data first_page_url-last_page_url
        coursesData.data.first_page_url = `${HOSTNAME}/courses?${firstPage}`;
        coursesData.data.last_page_url = `${HOSTNAME}/courses?${lastPage}`;

        if (coursesData.data.next_page_url) {
            const nextPage = coursesData.data.next_page_url.split('?').pop();
            coursesData.data.next_page_url = `${HOSTNAME}/courses?${nextPage}`;
        }

        if (coursesData.data.prev_page_url) {
            const prevPage = coursesData.data.prev_page_url.split('?').pop();
            coursesData.data.prev_page_url = `${HOSTNAME}/courses?${prevPage}`;
        }

        coursesData.data.path = `${HOSTNAME}/courses`;
        // return res.json(course.data);

        return res.json(coursesData);
        
    } catch (error) {

        // if api service media disconected
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'Service unavailable'
            });
        }

        const {
            status,
            data
        } = error.response;
        return res.status(status).json(data);
    }

}