const request = require('request');

const geocode = (address,callback)=>{
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmphZ2FkZWVzaCIsImEiOiJjazN6emhxNXUwZHg4M2xtbWlmbWpreWZ0In0.kIW0QCdsZpPlHBWjPWqAvw';
    request({ url: geoCodeUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to location service',undefined);
        }
        else if (body.features.length === 0) {
            callback('Unable to find location.try another search',undefined);
        }
        else {
           callback(undefined,{
               latitude:body.features[0].center[1],
               longitude:body.features[0].center[0],
               location:longitude = body.features[0].place_name
            })
        }
    });
}

// const data = response.body;
// const latitude = data.features[0].center[1];
// const longitude = data.features[0].center[0];
// console.log(latitude, longitude);

// geocode('New York',(error,response)=>{
    
// })

module.exports = geocode;