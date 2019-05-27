
const forecast = require('./utiles/forecast')
const geocode = require('./utiles/geocode')





 geocode('new york' , (error,data)=> {
    if(error) {
        return console.log(error)
    }
  
  
    console.log('error',error)
    console.log('data',data)
    forecast(data.laltitude, data.longtitude, (error, forecastData) => {
       if( error) {
           return console.log(error)
       }
       
        console.log(data.location)
        console.log(forecastData)
    })


})
