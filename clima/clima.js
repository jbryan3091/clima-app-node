const yargs = require("yargs");

const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=dbe45ee9f49415eb22eeb519081feb83&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}