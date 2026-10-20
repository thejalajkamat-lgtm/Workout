
//Print Jalaj Kamat 10 times in compact way
// for(let i=1; i<=10; i++){
//     console.log("Jalaj Kamat")
// }
//Sum of 1 to n
// let n = prompt("Enter the value of n: ")
// let sum = 0;
// for(let i=0; i<=n; i++){
//     sum = sum + i;
// }
// console.log(sum);

//While Loop
//Print Jalaj Kamat 5 times
//Do While Loop
// let j = 20;
// do {
//     console.log("Apna College");
//     j++
// } while(j<=30);
let student = {
    name: "Jalaj Kamat",
    Age: 20,
    CGPA: 8.7,
    isPass: true,
};

for(let key in student){
    console.log("key = ", key, "Value = ", student[key]);
    console.log("key = ", key, "Value = ", student["Age"]);
    console.log("key = ", key, "Value = ", student["CGPA"]);
    console.log("key = ", key, "Value = ", student["isPAss"]);
}