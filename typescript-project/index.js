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
let chistes = [];
function getChiste() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        return response.json();
        // console.log('response ', response);
        // console.log('data ', data);
        // console.log('error ', errors);
        // console.log(chistes);
    });
}
function chiste() {
    return __awaiter(this, void 0, void 0, function* () {
        getChiste().then((data) => {
            chistes.push({ joke: data.joke, score: 1 });
        });
        console.log("caca", chistes);
    });
}
