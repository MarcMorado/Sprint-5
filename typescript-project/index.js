"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let reportJokes = [];
let checker = 0;
let today = new Date().toISOString();
function getDad() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        return response.json();
    });
}
function getNorris() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("https://api.chucknorris.io/jokes/random", {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        return response.json();
    });
}
function chiste() {
    return __awaiter(this, void 0, void 0, function* () {
        const rndInt = Math.floor(Math.random() * 2) + 1;
        if (rndInt === 1) {
            getDad().then((data) => {
                reportJokes.push({ joke: data.joke, score: 0, date: today });
                document.getElementById("jokeTxt").textContent =
                    data.joke;
            });
            console.log("Dad joke", reportJokes);
        }
        else {
            getNorris().then((data) => {
                reportJokes.push({ joke: data.value, score: 0, date: today });
                document.getElementById("jokeTxt").textContent =
                    data.value;
            });
            console.log("Norris joke", reportJokes);
        }
        checker += 1;
    });
}
function points(num) {
    switch (num) {
        case 1:
            reportJokes[checker - 1].score = 1;
            break;
        case 2:
            reportJokes[checker - 1].score = 2;
            break;
        case 3:
            reportJokes[checker - 1].score = 3;
            break;
    }
    console.log(reportJokes);
}
// window.onload = function holis() {
//   getNorris().then((data) => {
//     reportJokes.push({ joke: data.value, score: 0, date: today });
//   });
//   console.log("Dad joke", reportJokes);
// };
