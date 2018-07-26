//node app.js -a="1301 lombard street philadelphia"
//node app.js -a="2316 boa viagem avenue recife"
//node app.js -a="Tavares, Coruripe"

const yargs = require("yargs")
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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


geocode.geocodeAddress(argv.address, (errorMessage,results) => {
        if(errorMessage){
                console.log(errorMessage)
        }else{
                console.log(results.address)

                weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
                        if(errorMessage){
                                console.log(errorMessage)
                        }else{
                                console.log(`It currently ${weatherResults.temperature}`)
                                console.log(`It fells like ${weatherResults.apparentTemperature}`)

                        }
                })
                
        }
});

Lat=10.1509784; Lon= -36.3303942


