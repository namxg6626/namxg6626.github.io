"use strict";
let cityName = 'Hà Nội';
let lang = "vi";
const _API_KEY = '3a52c53579e9e60d4e060982eb255fc2'; // key free =)), dang ky mien phi
let _CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY}&lang=${lang}`;
let _FORECAST_5DAYS_3HOURS = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${_API_KEY}&lang=${lang}`; // cnt indicates number of forecasts (optional)
let _TIME_BASE_ON_IP = "https://worldtimeapi.org/api/ip";
let forecasts = [];
let current = {};
// let unixTime = Math.ceil(Date.now() / 1000); // Date.now(): millisecond
// console.log(Date(1582120919*1000))

userSearch();
refreshData()
    .catch(error => {
        alert('Có lỗi xảy ra hoặc tên tỉnh không tồn tại');
        location.href = location.href.split('?')[0];
    });

// define function
function userSearch() {
    let url = window.location.href;
    if (url.split('=')[1] !== undefined) {
        cityName = url.split('=')[1].replace(/[+]/g, ' ');
        refreshAPI(cityName);
        getDataFromServer(_CURRENT_WEATHER)
            .then(result => refreshData())
            .catch(error => {
                alert('Tên tỉnh không tồn tại');
                cityName = "Hà Nội";
            })
        return true;
    }
    return false;
}

async function refreshData() {
    current = await getDataFromServer(_CURRENT_WEATHER);
    forecasts = await getDataFromServer(_FORECAST_5DAYS_3HOURS);
    let weekday = await getDataFromServer(_TIME_BASE_ON_IP).then(result => result.day_of_week);
    current.weekday = getWeekday(weekday);
    console.log(current, forecasts);
    console.log(weekday);
    displayCurrentWeather(current);
    displayForecastInDay(forecasts.list);
}

function displayForecastInDay(sourceData) {
    let skip = 0;
    let forecastInDay = document.querySelector('.forecast-in-day');
    let time = forecastInDay.querySelectorAll('.time');
    let icon = forecastInDay.querySelectorAll('img');
    let temperature = forecastInDay.querySelectorAll('.temperature');

    for (let i = 0; i < time.length; i++) {
        time[i].textContent = parseInt(sourceData[i + skip].dt_txt.split(' ')[1].split(':')[0]) + 'h';
        icon[i].setAttribute('src', `https://openweathermap.org/img/wn/${sourceData[i].weather[0].icon}.png`)
        temperature[i].textContent = Math.round(sourceData[i].main.temp) + "°";
    }
}

function displayCurrentWeather(sourceData) {
    let status = {
        name: sourceData.name,
        temperature: Math.round(sourceData.main.temp),
        wday: current.weekday,
        weather: sourceData.weather[0].description.charAt(0).toUpperCase() + sourceData.weather[0].description.slice(1),
        icon: sourceData.weather[0].icon
    }
    for (let e in status)
        document.querySelectorAll('.current-weather .' + e).forEach(element => {
            element.textContent = status[e];
        });
    document.querySelector('.current-weather img').setAttribute('src', `https://openweathermap.org/img/wn/${status.icon}@2x.png`)
    return sourceData;
}

async function getDataFromServer(baseURL) {
    let result = await fetch(baseURL);
    let data = await result.json();
    return data;
}

function refreshAPI(newCityName = 'Hà Nội', newLang = "vi", newAPIKey = _API_KEY) {
    _CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&units=metric&appid=${newAPIKey}&lang=${newLang}`;
    _FORECAST_5DAYS_3HOURS = `https://api.openweathermap.org/data/2.5/forecast?q=${newCityName}&units=metric&appid=${newAPIKey}&lang=${newLang}`; // cnt indicates number of forecasts (optional)
}

function getWeekday(dayOfWeek) {
    switch (dayOfWeek) {
        case 1:
            if (lang === "vi")
                return "Thứ 2";
            else return "Monday";
        case 2:
            if (lang === "vi")
                return "Thứ 3";
            else return "Tuesday";
        case 3:
            if (lang === "vi")
                return "Thứ 4";
            else return "Wednesday";
        case 4:
            if (lang === "vi")
                return "Thứ 5";
            else return "Thursday";
        case 5:
            if (lang === "vi")
                return "Thứ 6";
            else return "Friday";
        case 6:
            if (lang === "vi")
                return "Thứ 7";
            else return "Saturday";
        case 7:
            if (lang === "vi")
                return "Chủ nhật";
            else return "Sunday";
        default:
            break;
    }
}
