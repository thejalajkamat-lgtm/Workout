
// CALL STACK
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

//CALLBACK HELL
// function savetoDb(data, success, failure){
//     let internet = Math.floor(Math.random()*10)+1;
//     if(internet>4){
//         success();
//     }else{
//         failure();

// }

// savetoDb(
//     "Jalaj Kamat",
//     () => {
//         console.log("Success1: Your data is saved");
//         savetoDb("Niraj Kamat",
//             () => {
//                 console.log("Success2: Your data is saved");
//                 savetoDb("Nitin Kamat",
//                     () => {
//                         console.log("Success3: Your data is saved");
//                     },
//                     () => {
//                         console.log("failure3: Your data is not saved")
//                     }
//                 )
//             },
//             () => {
//                 console.log("failure2: Your data is not saved")
//             }
//         )
//     }, 
//     () => {
//         console.log("failure1: Your data is not saved")
//     }
// )
//USING PROMISES
// function savetoDb(data){
//     return new Promise( (resolve, reject) => {
//         let interet = Math.floor(Math.random()*10)+1;
//         if(interet>4){
//             resolve("strong connection");
//         }else{
//             reject("weak connection");
//         }
//     })
// }

// savetoDb("Jalaj Kamat")
//     .then( (resolve) => {
//     console.log(resolve)
//     console.log("Data1 is saved")
//     return savetoDb("Niraj Kamat")
//     })
//     .then( (resolve) => {
//     console.log(resolve)
//     console.log("Data2 is saved")
//     return savetoDb("Nitin Kamat")
//     })
//     .then((resolve) => {
//     console.log(resolve)
//     console.log("Data3 is saved")
//     })
//     .catch( (reject) => {
//     console.log(reject)
//     console.log("Data is not saved")
//     })

//USING ASYNC AWAIT
async function savetoDb(data) {
    let interet = Math.floor(Math.random() * 10) + 1;
    if (interet > 4) {
        return "strong connection";
    } else {
        throw "weak connection";
    }
}

async function run() {
    // These run sequentially, one after the other
    let res1 = await savetoDb("Jalaj Kamat");
    console.log(res1);
    console.log("Data1 is saved");

    let res2 = await savetoDb("Niraj Kamat");
    console.log(res2);
    console.log("Data2 is saved");

    let res3 = await savetoDb("Nitin Kamat");
    console.log(res3);
    console.log("Data3 is saved");
}
run();
//TRY to use try catch block to handle errors in async await