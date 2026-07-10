let url1 = "https://icanhazdadjoke.com/";
let url = "https://catfact.ninja/fact";
fetch(url)
    .then( (res) => {
    // console.log(res)
    return res.json()
    })
    .then( (data) => {
        console.log("data 1 = ",data.fact)
        return fetch(url1, {
            headers: {
                "Accept": "application/json"
            }
        })
    })
    .then( (res) => {
        return res.json()
    })
    .then( (data) => {
        console.log("data 2 = ",data.joke)
    })
    .catch( (err) => {
    console.log("Error - ",err)
    })

// async function getFacts(){
//     try {
//         let res = await fetch(url);
//     let data = await res.json();
//     console.log("data 1 = ", data.fact)
//     // console.log(res)
//     }catch(err){
//         console.log("Error - ", err)
//     }
//     console.log("bye")
// }

// let jsonRes = 
// '{"fact":"Cats take between 20-40 breaths per minute.","length":43}'
// let validRes = JSON.parse(jsonRes); //covertinrg string into JS object
// console.log(validRes.fact)  
// // console.log(jsonRes.fact)  

// let student = {
//     name: "Jalaj Kamat",
//     marks: 95
// };
// let studentJson = JSON.stringify(student); //converting JS object into string
