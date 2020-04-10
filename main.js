
let input = document.getElementById('userIn')

const confirmed = document.getElementById('confirmed')
const deaths = document.getElementById('deaths')
const recovered = document.getElementById('recovered')

const newCases = document.getElementById('newCases')
const newDeaths = document.getElementById('newDeaths')
const newRecov = document.getElementById('newRecov')

const cards = document.querySelectorAll('.results__card')


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
    let result = countries.filter(country => country.Slug === userIn)
    
    if (result.length === 0) {
        swal('No country found', 'Watch your typing', 'warning')

    } else {
        confirmed.textContent = result[0].TotalConfirmed
        deaths.textContent = result[0].TotalDeaths
        recovered.textContent = result[0].TotalRecovered

        newCases.textContent = `New Cases: ${result[0].NewConfirmed}`
        newDeaths.textContent = `New Deaths: ${result[0].NewDeaths}`
        newRecov.textContent = `New Recovered: ${result[0].NewRecovered}`

        cards.forEach(card => card.classList.add('show'))

    }





}
