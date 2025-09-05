const apiAdaptor = require('../../apiAdaptor');
const jwt = require('jsonwebtoken')
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_ACCESS_TOKEN_EXPIRED,
    JWT_SECRET_REFRESH_TOKEN_EXPIRED
} = process.env; //variable config

const api = apiAdaptor(URL_SERVICE_USER);

module.exports = async (req, res) => {
    try {
        const user = await api.post('/users/login', req.body);
        // LOGIN DATA
        const data = user.data.data;
        // jwt acces token
        const token = jwt.sign({
            data
        }, JWT_SECRET, {
            expiresIn: JWT_ACCESS_TOKEN_EXPIRED
        })
        const refreshToken = jwt.sign({
            data
        },  JWT_SECRET_REFRESH_TOKEN, {
            expiresIn:  JWT_SECRET_REFRESH_TOKEN_EXPIRED
        });

        // save refresh token to table refresh token
        await api.post('/refresh_tokens', {
            refresh_token: refreshToken,
            user_id: data.id
        });

        return res.json({
            status: 'success',
            data: {
                token,
                refresh_token: refreshToken
            }
        });

        // sebelum refresh token
        // return res.json(user.data);
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