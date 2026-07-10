// Async functions are functions that return a promise. 
async function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num)
            resolve();
        },1000);
    });
}
async function demo(){
    await getNum();
    await getNum();
    getNum();
}
demo()

let jsonRes = '{"fact":"Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees.","length":122}'
let validRes = JSON.parse(jsonRes);
console.log(jsonRes) //in string format
console.log(jsonRes.fact) //in string format
console.log(validRes) // in JS Object format
console.log(validRes.fact) // in JS Object format

let student = {
    name: "Jalaj Kamat",
    marks: 95
};
let studentJson = JSON.stringify(student); //converting JS object into string

let url = "https://catfact.ninja/fact";
fetch(url)