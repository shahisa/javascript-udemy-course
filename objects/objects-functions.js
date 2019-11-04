let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 386
}

let otherBook = {
    title: 'Peoples History',
    author: 'Howard Zen',
    pageCount: 723
}


function getSummary(book){

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} with ${book.pageCount} pages long.`
    }

    console.log(`${book.title} by ${book.author}`)
}


let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary,otherBookSummary.summary)

// Challenge 
// Temperature Converter Take in Fahrenheit and convert to Celcius and Kelvin. This will be an object. 

function tempConverter(num) {
    return {
        fahrenheit: num,
        celsius: (num-32) * (5/9),
        kelvin: (num + 459.67) * (5/9)
    }

}
let temperature = tempConverter(4343)
console.log(temperature)
// console.log(`The fahrenheit tempture is: ${tempConverter.fahrenheit}. The kelvin and celcius are ${tempConverter.kelvin} and ${tempConverter.celcius} respectively.`)
