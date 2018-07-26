const request = require('request');

var getWeather  = (lat,lon,callback) => {

    myUrl = `https://api.darksky.net/forecast/6b5f0a925177c88ae7e9b9f7fde9eec5/${lat},${lon}`

    request({
            url:myUrl,
            json:true},
            (error, response, body) => {
            if(!error && response.statusCode === 200){
                    var dataOut = {temperature:body.currently.temperature,
                        apparentTemperature:body.currently.apparentTemperature}
                    callback(undefined,dataOut)
            }else{
                callback("Unable to fetch weather.")
            }
            
    });
}

module.exports.getWeather=getWeather


