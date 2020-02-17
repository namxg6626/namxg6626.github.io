"use strict";
let cityName = 'thanh hóa';
let lang = "vi";
const _API_KEY = '3a52c53579e9e60d4e060982eb255fc2'; // key free =)), dang ky mien phi
let _CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY}&lang=${lang}`;
let _FORECAST_5DAYS_3HOURS = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${_API_KEY}&lang=${lang}`; // cnt indicates number of forecasts (optional)
let _TIME_BASE_ON_IP = "http://worldtimeapi.org/api/ip";
let forecast = {};
let current = {};
let unixTime = Math.ceil(Date.now() / 1000);

displayCurrentData().catch(error => console.error(error));

async function displayCurrentData() {
    current = await getDataFromServer(_CURRENT_WEATHER);
    console.log(current);
    let status = {
        name: current.name,
        temperature: Math.round(current.main.temp),
        wday: getDayInWeek(
            await getDataFromServer(_TIME_BASE_ON_IP)
                .then(result => { 
                    console.log(result);
                    return result.day_of_week; 
                })
                .catch(error => console.log(error))
        ),
        weather: current.weather[0].description.charAt(0).toUpperCase() + current.weather[0].description.slice(1),
        icon: current.weather[0].icon
    }
    for (let e in status)
        document.querySelectorAll('.current-weather .' + e).forEach(element => {
            element.textContent = status[e];
        });
    document.querySelector('.current-weather img').setAttribute('src', `https://openweathermap.org/img/wn/${status.icon}@2x.png`)
    return current;
}

async function getDataFromServer(baseURL) {
    let result = await fetch(baseURL);
    let data = await result.json();
    return data;
}

function getDayInWeek(dayOfWeek) {
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
