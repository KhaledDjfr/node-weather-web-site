

const request = require('request')



const geocode = (place,callback)=> {

    const geo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoibWFkZTAxIiwiYSI6ImNqdzB1bTY4ZDAyNG0zeXF0ZDEybGcwbDYifQ.4mVLKKtvkdwxF7a38GKQ4g`
    request ({url:geo, json:true } ,(error , response) => {
        if(error) {
            callback(' unable to connect to the server api ',undefined)
        }  else if (response.body.features.length === 0) {
            callback('unable to get you location please , search again ', undefined)
        }   else  { 
           callback ( undefined , {
            laltitude : response.body.features[0].center[1],
             longtitude : response.body.features[0].center[0],
             location:  response.body. features[0].place_name  })
                    }
    
})
}



module.exports = geocode 

