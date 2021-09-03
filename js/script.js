
const API_KYE = `e033e1f00c8571f4b39d1b4cf3739922`

const loadTemparature = () => {
    const inputFilled = document.getElementById('input-filled')
    const inputText = inputFilled.value
    inputFilled.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KYE}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}
const displayTemparature = temparature => {
    console.log(temparature)
    const container = document.getElementById('display-filled')
    const div = document.createElement('div')
    div.innerHTML = `<div class="weather-status text-white text-center">
    <img src="http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png" alt="">
    <h1>${temparature.name}</h1>
    <h3><span >${temparature.main.temp}</span>&deg;C</h3>
    <p>${temparature.weather[0].main}</p>
    
</div>`
    container.textContent = '';
    container.appendChild(div)
}

