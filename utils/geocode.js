const fs      = require('fs')
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
        '.json?access_token=' + getToken()
    request.get({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Mapbox API')
        } else if (body.error) {
            callback(body.error)
        } else if (body.features.length == 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}

const getToken = () => {
    try {
        return JSON.parse(fs.readFileSync('./config/tokens.json').toString()).mapbox
    } catch (e) {
        console.log('Please provide the "mapbox" access token')
    }
}

module.exports = geocode