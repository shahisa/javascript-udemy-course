// Undefined for variable 

let name 

name = "Abdullah"

if (name === undefined){
    console.log("Please provide a name.")
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function returns defult value 
function square (num){
    console.log(num)
}

let result = square()
console.log(result) 

//Null as assigned value 
let age = 26

age = null 
console.log(age)
