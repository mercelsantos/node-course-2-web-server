
const request = require('request');


var  geocodeAddress = (argvAddress,callback) => {

    var myAddress =  encodeURIComponent(argvAddress);

    myUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+myAddress+',+CA&key=AIzaSyAYx4QCdfs_wDvW7ZmJSTsYSwxqk6irh0Y'
    request({
            url:myUrl,
            json:true},
            (error, response, body) => {
            if(error){
                    callback("Unable to connect to Google servers")
            }else if(body.status==="ZERO_RESULTS"){
                    callback('Unable to find that address.')
            }else if(body.status==="OK"){
                    var myResult = {
                        address:body.results[0].formatted_address,
                        latitude:body.results[0].geometry.location.lat,
                        longitude:body.results[0].geometry.location.lng
                    }
                    callback(undefined,myResult)
            }
            
    });

}

// module.exports = {geocodeAddress}
module.exports.geocodeAddress = geocodeAddress