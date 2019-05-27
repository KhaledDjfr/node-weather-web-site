const request = require('request')


const forecast = (ln,la,callback)=> {
const weather = `https://api.darksky.net/forecast/4fbce4becce3d7231902146eb4533c0e/${ln},${la}`

request({url:weather , json:true }, (error, response)=> {

        if (error) {
            callback('Uable to connect to weather try again !', undefined)
        } else if (response.body.error) {
            callback('uanble to get the weather check your location  ', undefined)
        } else {
            callback(undefined ,` For The Summmary of the day ${response.body.daily.data[0].summary} , and it's Currently  ${response.body.currently.temperature} dgress and ${response.body.currently.precipProbability}% chance of rain`)
        }
        })
}
module.exports = forecast 

