function add(a,b,c){
    return a + b + c 
}

// console.log(add(23,23,42))

function getScoreText(name = 'Anynomous', score = 0){
    return ` Name is ${name} and his score is ${score} .`
}

console.log(getScoreText(undefined,32))

function tipCalculator (total,tip = .2){
    let finalTotal = tip + total
    return finalTotal
}

console.log(tipCalculator(382,.3))
let name = 'Abdullah'
let time = '14:32'
console.log(`Hello ${name} your a irritant to the team. Please move on with your day. Also, it is ${time} why are you just getting in ?`)