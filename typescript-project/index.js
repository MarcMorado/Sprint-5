"use strict";
var chistes;
function chiste() {
    fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: { Accept: "application/json" },
    })
        .then((response) => response.json())
        .then((json) => chistes.push(json));
    console.log(chistes);
}
