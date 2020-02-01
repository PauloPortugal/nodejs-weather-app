const request = require('request')

const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG1vbnRlaXJvIiwiYSI6ImNrNjN2eXZwMDA5dHczcG1wcDVzdTA3NWkifQ.o9qkby7FbRrlFDF1cOHrqg'
request.get({ url: urlMapbox, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to Mapbox API')
    } else if (response.body.error) {
        console.log(response.body.error)
    } else if (response.body.features.length == 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        getWeatherReport(
            response.body.features[0].place_name,
            response.body.features[0].center[1],
            response.body.features[0].center[0]
            )
    }
})

const getWeatherReport = (place,latitude, longitude) => { 
    const urlDarsky = `https://api.darksky.net/forecast/101950d23af0fb904ca0132ae4ce942f/${latitude},${longitude}?units=si`
    request.get({ url: urlDarsky, json: true}, (error, response) => {
        if (error) {
            console.log('Unable to connect to the weather service')
        } else if (response.body.error){
            console.log(response.body.error)
        } else {
            console.log(place)
            console.log('\n' + response.body.daily.data[0].summary)
            console.log(`It is currently ${response.body.currently.temperature} degrees outside.`)
            console.log(`There is a ${response.body.currently.precipProbability}% change of rain.`)
        }
    })
}
