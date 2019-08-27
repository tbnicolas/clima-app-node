const axios = require('axios')
const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': 'e6e5040664msh4a64d2e958ce03ep1530a7jsn65ba5fd2b911' }
    })

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon
    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}