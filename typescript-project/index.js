"use strict";
var chistes;
fetch('https://icanhazdadjoke.com/')
    .then(response => response.json())
    .then(json => console.log(json));
function chiste() {
}
