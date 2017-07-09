import axios from 'axios';

const KEY = '240839e1e58f1611e3ac3a6ce2f6d347';

export function getWeatherOneDay(city) {
    let encodeURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + KEY);

    return axios.get(encodeURI)
           .then(function (res) {
               return res.data;
           })
}

export function getWeatherFiveDays(city) {
    let encodeURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + KEY + '&cnt=5');

    return axios.get(encodeURI)
        .then(function (res) {
            return res.data;
        })
}