const request = require('request');

const forecast = (longitude,latitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/c82d340489f1ee6cc8c3ec5438c50570/'+latitude+','+longitude+'?units=us&lang=en';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect service',undefined);
        }
        else if (body.error) {
            callback('Unable to find location',undefined);
        }
        else {
            // const data = JSON.parse(response.body);
            // const data = response.body;
            callback(undefined,body);
            // console.log(data.daily.data[0].summary + data.currently.temperature + ' probability' + data.currently.precipProbability);
        }
    });
}

module.exports = forecast;