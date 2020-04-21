const API = 'https://api.covid19api.com/summary'
const select = document.getElementById('select')

function getData() {
    fetch(API).then(response => response.json())
    .then(data => {
        const countries = data.Countries
        const list = countries.map(country => country.Country)
        list.forEach(country => {
            const content = country
            const option = document.createElement('option')
            option.textContent = content
            select.add(option)
        })       
    })
}

select.addEventListener('input', print)


function print() {
    console.log(this.value)
}


getData()


