const {config} = require('dotenv');
config();
console.log(process.env.PORT);
module.exports={
    port: process.env.PORT || 3000
};