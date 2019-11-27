const request = require('request')
const url = 'https://api.darksky.net/forecast/2d1d1f982bce8940643acf2946477e9d/37.8267,-122.4233'

request({url:url, json: true}, (error, response)=>{
const data =response.body;
console.log(data.currently)
})