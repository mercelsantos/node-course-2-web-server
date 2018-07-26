//node app.js -a="1301 lombard street philadelphia"
//node app.js -a="2316 boa viagem avenue recife"
//node app.js -a="Tavares, Coruripe"

const yargs = require("yargs")
const axios = require("axios")

const argv = yargs
             .options({
                     a:{
                        demand: true,
                        alias:"address",
                        describe:"Address to fecht weather for",
                        string:true
                     }
             })
             .help("help","h")
             .argv;

             var myAddress =  encodeURIComponent(argv.address);

             myUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+myAddress+',+CA&key=AIzaSyAYx4QCdfs_wDvW7ZmJSTsYSwxqk6irh0Y'

             axios.get(myUrl).then( (response) =>{
                if (response.data.status === "ZERO_RESULT"){
                        throw new Error("Unable to find that address")
                }

                var lat = response.data.results[0].geometry.location.lat
                var lng = response.data.results[0].geometry.location.lng

                weatherUrl = `https://api.darksky.net/forecast/6b5f0a925177c88ae7e9b9f7fde9eec5/${lat},${lng}`

                return axios.get(weatherUrl);

                        // console.log(response.data)
             }).then((response) => {
                var temperature =  response.data.currently.temperature
                var apparentTemperature =  response.data.currently.apparentTemperature

                console.log(`It currently ${temperature}`)
                console.log(`It fells like ${apparentTemperature}`)
             }).catch( (error) => {
                     if(error.code==="ENOTFOUND"){
                        console.log('Unable to connect to API severs.')
                     }else{
                        console.log(error.message)
                     }
             })
