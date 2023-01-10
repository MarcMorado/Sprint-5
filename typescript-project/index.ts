let chistes: { joke: string; score: number }[] = [];

async function getChiste() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  return response.json();
  // console.log('response ', response);
  // console.log('data ', data);
  // console.log('error ', errors);

  // console.log(chistes);
}

async function chiste() {
  getChiste().then((data) => {
    chistes.push({ joke:data.joke, score: 1 });
  });
  console.log("caca", chistes);
}
