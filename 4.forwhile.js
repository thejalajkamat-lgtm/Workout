//Print Jalaj Kamat 10 times in compact way
for(let i=1; i<=100; i++){
      console.log("Jalaj Kamat");
}


//Sum of 1 to n
let n = prompt("Enter value of n : ");
console.log("Value of n is ", n)
let sum = 0;
for(let  i=1; i<=n; i++){
    sum = sum + i;
}
console.log("sum = ", sum);

//Infinite loop 
let Sum = 0;
for(let i=1; i<=-1; i++){
    Sum = Sum + 1
}
console.log(sum);


//While Loop
//Print Jalaj Kamat 5 times
let i = 1;
while(i<=5){
    console.log("Jalaj Kamat");
    i++;
}


//Do While Loop
let j = 20;
do {
    console.log("Apna College");
    j++
} while(j<=30);


//For of loop (used for special datatypes like strings or arrays)
let str = "Jalaj Kamat";
let size = 0;
for(let val of str ){
    console.log("i = ", val);
    size++;
}
console.log("string size = ", size) 


//For In Loop
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