
let input = document.getElementById('userIn')

let confirmed = document.getElementById('confirmed')
let deaths = document.getElementById('deaths')
let recovered = document.getElementById('recovered')

let cards = document.querySelectorAll('.results__card')


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

    confirmed.textContent = results[0].TotalConfirmed
    deaths.textContent = results[0].TotalDeaths
    recovered.textContent = results[0].TotalRecovered

    cards[0].classList.add('show')
    cards[1].classList.add('show')
    cards[2].classList.add('show')



}
