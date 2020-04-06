
let input = document.getElementById('userIn')

const API = 'https://api.covid19api.com/summary'

input.addEventListener('keypress', (e) => checKey(e))


function checKey(e) {
    if (e.keyCode === 13) {
        const userInput = input.value.toLowerCase()
        getData(userInput)
    }
}

async function getData(userIn) {
    let response = await fetch(API)
    let data = await response.json()

    let countries = data.Countries
    let results = countries.filter(country => country.Slug === userIn)
    console.log(results)

}
