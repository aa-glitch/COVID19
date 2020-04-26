
let input = document.getElementById('userIn')

const confirmed = document.getElementById('confirmed')
const deaths = document.getElementById('deaths')
const recovered = document.getElementById('recovered')

const newCases = document.getElementById('newCases')
const newDeaths = document.getElementById('newDeaths')
const newRecov = document.getElementById('newRecov')

const cards = document.querySelectorAll('.results__card')


const API = 'https://api.covid19api.com/summary'

document.addEventListener('DOMContentLoaded', createOptions)

async function createOptions() {

    try {

        const response = await fetch(API)
        const data = await response.json()
        
        countries = data.Countries  //Global Variable
        const list = countries.map(country => country.Country)
        list.forEach(country => {
            const content = country
            const option = document.createElement('option')
            option.textContent = content
            input.add(option)
        })
    }

    catch(err) {
        console.error(err)
    }

}


input.addEventListener('input', () => {
    getData(input.value)
})


function getData(userIn) {

    //We only call once to the API to get the data
    const result = countries.filter(country => country.Country === userIn)
    confirmed.textContent = result[0].TotalConfirmed
    deaths.textContent = result[0].TotalDeaths
    recovered.textContent = result[0].TotalRecovered

    newCases.textContent = `New Cases: ${result[0].NewConfirmed}`
    newDeaths.textContent = `New Deaths: ${result[0].NewDeaths}`
    newRecov.textContent = `New Recovered: ${result[0].NewRecovered}`

    cards.forEach(card => card.classList.add('show'))

    cards.forEach(card => addEventListener('animationend', () => {
        card.style.opacity = '1'
        card.style.height = '300px'
        card.classList.remove('show')
    }))

}
