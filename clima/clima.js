const axios = require('axios')

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7fedd8bf321018898d29117180aa6bfb`)
    const constanteKelvin = 273.15
    const temperaturaCelcius = (resp.data.main.temp - constanteKelvin)
    return parseFloat(temperaturaCelcius).toFixed(2);
}




module.exports = {
    getClima
}