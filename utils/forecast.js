const request     = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY_TOKEN + '/' + 
        encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request.get({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather service')
        } else if (body.error){
            callback(body.error)
        } else {
            const { temperature, precipProbability } = body.currently
            const forecastSummary = body.daily.data[0].summary + 
            ' It is currently ' + temperature + ' degrees outside. There is a ' + precipProbability*100 + '% change of rain.'
            callback(undefined, forecastSummary)
        }
    })
}

module.exports = forecast