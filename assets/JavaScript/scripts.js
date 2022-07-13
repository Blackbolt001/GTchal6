var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={139764592ad2853c5c9559c1e1dbe824}')