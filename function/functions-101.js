// Function - input (arugment) , code , output 


let greetUser = function (){
    console.log('Welcome Human Being')
}

greetUser()

let square = function (num){
    let result = num * num
    return result 
}

let value = square(3)
let newValue = square(12)

console.log(value)
console.log(newValue)

// Function of conversion of F to C

function tempConversion(fahrenheit){
    let celcius = (fahrenheit - 32)*(5/9)
    return celcius

}

console.log("This is the temperature for Celcuis: " + tempConversion(34) + " based on the Fahrenheit tempurature.")