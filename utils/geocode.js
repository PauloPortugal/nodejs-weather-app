const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoicG1vbnRlaXJvIiwiYSI6ImNrNjN2eXZwMDA5dHczcG1wcDVzdTA3NWkifQ.o9qkby7FbRrlFDF1cOHrqg'
    request.get({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Mapbox API')
        } else if (response.body.error) {
            callback(response.body.error)
        } else if (response.body.features.length == 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode