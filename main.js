const citySelect = document.querySelector('#city-select');
const cityNameDisplay = document.querySelector('.city-name');
const weatherIcoDisplay = document.querySelector('.weather-ico-box > img');
const tempDisplay = document.querySelector('.temp-box > span');
const windDisplay = document.querySelector('.wind-box > span');
const feelTempDisplay = document.querySelector('.feel-temp-box > span');

const API_KEY = '81b77559169fef95202fa3524ab7dd72';

citySelect.addEventListener('change', (e) => {
    getWeather(e.target.value);
})

const getWeather = async (city = 'seoul') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(url);

    const { name, main, weather, wind} = response.data;

    cityNameDisplay.innerText = name;
    weatherIcoDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
    tempDisplay.innerText = transferTemp(main.temp);
    windDisplay.innerText = wind.speed;
    feelTempDisplay.innerText = transferTemp(main.feels_like);
};

const transferTemp = (temp) => {
    return ((temp - 273.15).toFixed(1));
}

getWeather();