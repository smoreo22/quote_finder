const quotes = require("./quotes")

function getNumber (min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
console.log('Your lucky number is ...',getNumber(0,99))
console.log(quotes[getNumber(0,99)])