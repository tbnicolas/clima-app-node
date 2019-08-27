const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    let infoLugar = await lugar.getLugarLatLng(direccion)
    if (infoLugar) {
        let infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng)
        if (infoClima) {
            return {
                direccion,
                infoClima
            }
        } else {
            throw new Error('Error!!!', infoClima)
        }
    } else {
        throw new Error('Error!!!', infoLugar)
    }

}

getInfo(argv.direccion)
    .then(info => {
        console.log(`El clima de ${info.direccion} es de: ${info.infoClima}`);
    })
    .catch(console.log)