var chistes: object[];


function chiste() {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  chistes.push();
  console.log(chistes);
  
}
