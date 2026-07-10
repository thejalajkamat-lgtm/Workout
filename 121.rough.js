// let url1 = "https://icanhazdadjoke.com/";
// let url2 = "https://catfact.ninja/fact";
// fetch(url2)
//     .then( (res) => {
//         console.log("res 1 = ",res)
//         return res.text()
//     })
//     .then((htmlData) => {
//         console.log("data 1 = ", htmlData)
//         return fetch(url1, {
//             headers: {
//                 "Accept": "application/json"
//             }
//         })
//     })
//     .then( (res) => {
//         console.log(res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log("data2 = ", data.joke)
//     })
//     .catch( (err) => {
//         console.log("Error - ",err)
//     })


// fetch(url)
//     .then( (res,data) => {
//     // console.log(res)
//     return res.json()
//     })
//     .then( (data) => {
//         console.log("data 1 = ",data.fact)
//         return fetch(url1, {
//             headers: {
//                 "Accept": "application/json"
//             }
//         })
//     })
//     .then( (res) => {
//         return res.json()
//     })
//     .then( (data) => {
//         console.log("data 2 = ",data.joke)
//     })
//     .catch( (err) => {
//     console.log("Error - ",err)
//     })

const figlet = require('figlet');

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});