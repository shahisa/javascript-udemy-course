let isAccountLocked = true
let userRole = 'user'

if (isAccountLocked){
    console.log('Is the account locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
}else {
    console.log('Welcome')
}

// Challenge Area

let temp = 45

if (temp <= 32){
    console.log('It is freezing outside.')
} else if (temp >= 85){
    console.log('Its hot outside.')
} else {
    console.log('Is a nice day outside')
}