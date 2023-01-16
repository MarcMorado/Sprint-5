let reportJokes: { joke: string; score: number; date: string }[] = [];
let checker: number = 0;

///// GET APIS /////
async function getDad() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  return response.json();
}
async function getNorris() {
  let response = await fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  return response.json();
}
async function getWeather() {
  let response = await fetch(
    "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019",
    {
      method: "GET",
      headers: { Accept: "application/json" },
    }
  );

  return response.json();
}

///// PRINT JOKE /////
async function chiste() {
  let today = new Date().toISOString();
  const rndInt = Math.floor(Math.random() * 2) + 1;
  if (rndInt === 1) {
    getDad().then((data) => {
      reportJokes.push({ joke: data.joke, score: 0, date: today });
      (document.getElementById("jokeTxt") as HTMLElement).textContent =
        data.joke;
    });
    console.log("Dad joke", reportJokes);
  } else {
    getNorris().then((data) => {
      reportJokes.push({ joke: data.value, score: 0, date: today });
      (document.getElementById("jokeTxt") as HTMLElement).textContent =
        data.value;
    });
    console.log("Norris joke", reportJokes);
  }
  checker += 1;
}

///// SCORE /////
function points(num: number) {
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
  console.log('Modified score',reportJokes[checker-1]);
  
}

///// WEATHER /////
window.onload = function printWeather() {
  getWeather().then((data) => {
    if (data.stateSky.description === "Despejado") {
      $("#despejado").show();
    } else if (data.stateSky.description === "Poco nuboso") {
      $("#pocoNuboso").show();
    } else if (data.stateSky.description === "Cubierto") {
      $("#cubierto").show();
    } else if (data.stateSky.description === "Niebla") {
      $("#niebla").show();
    } else {
      $("#lluvia").show();
    }
    (document.getElementById("weather") as HTMLElement).textContent =
      data.temperatura_actual + "ºC";
  });
};

///// Show Score Btns /////
function btnShow() {
  $("#hideDiv").show();
}

