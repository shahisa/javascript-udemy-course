let myAccount = {
    name: 'Isa Weaver',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount){
    account.expenses = account.expenses + amount 

}
let addIncome = function (account, amount){
    account.income = account.income + amount
}

let resetAccount = function (account){
    account.income = 0
    account.expenses = 0 
}

let getAccountSummary = function (account){
    return {
        name: account.name,
        income: account.income,
        expenses: account.expenses
    }
}
addExpense(myAccount, 2.50)
addExpense(myAccount,500000)
addIncome(myAccount,20000000000)


console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// challenge problem
// addIncome 

// resetAccount : reset the expenses and income for an account to zero

// getAccountSummary : returns current account balance and income 
// Account for Isa has $2,000,000. $20,000,000 in income. $50,000 in expenses.