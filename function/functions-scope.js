// Global Scope 

// Function of conversion of F to C

function tempConversion(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9)
    return celcius

}

console.log("This is the temperature for Celcuis: " + tempConversion(34) + " based on the Fahrenheit tempurature.")