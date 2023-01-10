var chistes:object[];
fetch('https://icanhazdadjoke.com/')
      .then(response => response.json())
      .then(json => console.log(json));

function chiste(){

}