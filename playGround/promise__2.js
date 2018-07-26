const request = require ('request')


var geocodeAddress =  (argvAddress) =>{
    return new Promise ( (resolve,reject) => {
    
        var myAddress =  encodeURIComponent(argvAddress);

        myUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+myAddress+',+CA&key=AIzaSyAYx4QCdfs_wDvW7ZmJSTsYSwxqk6irh0Y'
        request({
                url:myUrl,
                json:true},
                (error, response, body) => {
                if(error){
                    reject("Unable to connect to Google servers")
                }else if(body.status==="ZERO_RESULTS"){
                    reject('Unable to find that address.')
                }else if(body.status==="OK"){
                        var myResult = {
                            address:body.results[0].formatted_address,
                            latitude:body.results[0].geometry.location.lat,
                            longitude:body.results[0].geometry.location.lng
                        }
                        resolve(myResult)
                }
                
        });
        
    });

};

geocodeAddress ('19146').then((location) => {
    console.log(JSON.stringify(location,undefined,2))
}, (errorMessage) =>{
    console.log(errorMessage);
} );