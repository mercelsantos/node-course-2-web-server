console.log("Starting app")

setTimeout(() =>{
 console.log('Inside the callback')   
},200)


setTimeout(() =>{
    console.log('Second timeout')   
   },0)

console.log('Finishing up')