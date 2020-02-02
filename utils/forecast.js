const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/101950d23af0fb904ca0132ae4ce942f/' + 
        encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request.get({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service')
        } else if (response.body.error){
            callback(response.body.error)
        } else {
            const forecastSummary = response.body.daily.data[0].summary + 
            ' It is currently ' + response.body.currently.temperature + ' degrees outside. ' + 
            'There is a ' + response.body.currently.precipProbability + '% change of rain.'
            callback(undefined, forecastSummary)
        }
    })
}

module.exports = forecast