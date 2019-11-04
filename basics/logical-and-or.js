let temp = 45


// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise
if (temp >=65 && temp <= 90){
    console.log('Its a nice day outside.')
} else if (temp <= 0 || temp >= 120){
    console.log('Dangerous tempurature. Do not go outside')
} else {
    console.log('Do what you want.')
}

// Challenge Area: Vegan Guests

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan ){
    console.log('Offer only vegan food.')

} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Offer a mix')
} else {
    console.log('Offer anything.')
}