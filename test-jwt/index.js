const jwt = require('jsonwebtoken');

const JWT_SECRET = 'bwamicro';

// // create basic token dengan proses syncronous
// const token = jwt.sign({
//     data: {
//         kelas: 'bwamikro'
//     }
// }, JWT_SECRET, {expiresIn: '1m'});
// // str '1h'
// console.log(token);


// create basic token asyncronous
// jwt.sign({data: { kelas: 'bwamikro'}}, JWT_SECRET,  {expiresIn: 3600}, (err, token) => {
//     console.log(token)
// });

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWlrcm8ifSwiaWF0IjoxNzU2NzExNzgyLCJleHAiOjE3NTY3MTUzODJ9.0G1vDk9ISRLXQ9e3T6QpS_LLJLoYP8p5PDIpDDQL64I'

// cara 1
// jwt.verify(token1, JWT_SECRET, (err, decoded)=> {
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log(decoded);

// });

// cara 2
try {
    const decoded = jwt.verify(token1, JWT_SECRET);
    console.log(decoded);
} catch (error){
console.log(error.message)
}

// console.log('aaaa');