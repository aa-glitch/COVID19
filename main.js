let p  = document.getElementById('demo')
let input = document.getElementById('pais')

const API = 'https://api.covid19api.com/summary'

input.addEventListener('keypress', (e) => checKey(e))


function checKey(e) {
    if (e.keyCode === 13) {
        const userInput = input.value.toLowerCase()
        getData(userInput)
    }
}

async function getData(country) {
    let response = await fetch(API)
    let data = await response.json()

    let paises = data.Countries
    let co = paises.filter(pais => pais.Slug === country)
    const muertes = co[0].TotalDeaths
    p.textContent = muertes

}



// getData()