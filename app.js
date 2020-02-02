const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (!process.argv[2]) return console.log("Please provide an address")

geocode(process.argv[2], (error, geocodeData) => {
    if (error) {
       return console.log(error)
    } 
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
        if (error) {
            console.log(error)
        }
        console.log(geocodeData.location)
        console.log(forecastData)
    })    
})
