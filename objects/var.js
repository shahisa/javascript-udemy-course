// Var is the old way of assigning variables currently we use let and const 
// So var allows us to recreate a variable with the same name. However, let and const tell the user that it is being redefined and crashes the program. 
// var is function scoped not block scoped. 
// Function scope: The variables and functions defined inside a function block are not accessible outside its block. For example let us have a look into below code snippet.

// if (11 ===11){
//     var secondName = 'Abdullah'
// }
// console.log(secondName)
// The above code will run because the var is allowed to be accesed 

if (10 === 10){
    let firstName = 'Khadeja' 
}
// console.log(firstName)
// using let and const allows fine tailoring a program so the variables are referenced exactly where the developer wants them to be accessed. 
// The above code will state firstName is not defined 

// const setName = function (){
//     var firstName = 'Béhanzin'
// }
// setName()
// console.log(firstName)
age = 10 
console.log(age)
var age 

