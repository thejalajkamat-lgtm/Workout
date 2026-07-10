// Arrays are used to store same datatypes(preferably)
//let marks_student1 = 97;
//let marks_student2 = 87;  //for 50+ students is inefficient

let marks = [97, 87, 88, 78,];
let heroes = ["ironmen", "hulk", "thor", "batman", "Jalaj"];
console.log(marks, marks.length, typeof marks, marks[0]);
console.log(heroes, heroes.length, typeof heroes, heroes[3]); //array is an object


//ARRAY METHODS[1][SHIFT, UNSHIFT, PUSH, POP]
let cars = ["BMW", "Audi", "Mercedes", "Porsche"]
cars.push("Lamborgini")  //push adds an element at the end of the array
console.log(cars)
cars.unshift("Rolls Royce") //unshift adds an element at the beginning of the array
console.log(cars)
cars.pop() //pop removes the last element of the array
console.log(cars)
cars.shift() //shift removes the first element of the array
console.log(cars)


//ARRAY METHODS[2][INDEXOF, INCLUDES]
let primary = ["red", "yellow", "blue"]
console.log(primary.indexOf("yellow"))
console.log(primary.indexOf("green"))
console.log(primary.includes("green"))
console.log(primary.includes("yellow"))


//ARRAY METHODS[3][CONCAT, REVERSE]
let secondary = ["orange", "green", "purple"]
console.log(primary.concat(secondary)) 
console.log(primary.reverse())

//ARRAY METHODS[4][SLICE, SPLICE]
let colors =  ["red", "yellow", "blue", "orange", "green", "purple"]
console.log(colors)
console.log(colors.slice(2))
console.log(colors.slice(-2))
console.log(colors.slice(1, 4))
console.log(colors.splice(4)) //splice(start, deleteCount, item0...itemN)
console.log(colors.splice(1,3))//splice changes the array unlike slice
console.log(colors.splice(0,2 , "black", "white"))
console.log(colors)

let months = ["jan", "july", "march", "august" ]
console.log(months)
console.log(months.splice(0,2,"july","june"))
console.log(months)

let language = ["C", "C++", "HTML", "JS", "C#", "SQL", "CSS" ]
console.log(language)
console.log(language.reverse().indexOf("C++"))


//ARRAY METHODS[5][SORT]arranges in alphabetical order for string and in ascending order (according to their string version) for numbers
let days = ["Monday", "Sunday", "Wednesday", "Tuesday"]
console.log(days.sort())
let num = [100, 50, 49, 44, 0, 1, 2]
console.log(num.sort())

//LOOPING FOR AN ARRAY
//for loop
let names = ["jalaj","niraj","anil","antmam","john","undertaker"]
for(let i=0; i<names.length; i++){
    console.log(names[i])    //i = index or idx
}
//for of loop
let cities = ["Mumbai", "Pune", "Hyderabad", "Indore", "Gurugaon"]
for(let city of cities){
    console.log(city.toUpperCase())
}


//For a given array with marks of students -> [85, 97, 44, 37,76, 60]. Find the average marks of the entire class
let marx = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marx){
    sum += val
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);


//Create a nested array to show the following tic-tac-toe game state
let game = [['x', null, 'o'], [null, 'x', null], ['o', null, 'x']]


//For a given array with prives of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
//Using for of loop
let items = [250, 645, 300, 900, 50]
let i = 0;
for(let val of items){
    console.log(`Value at index ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`)
    i++;
}
//using for loop
let price = [250, 645, 300, 900, 50]
for(let i=0; i<price.length; i++ ){
    let offer =price[i]/10;
    price[i] -= offer;
}
console.log(items);


//NESTED LOOPS FOR ARRAY
let heros = [["ironman", "spiderman", "thor"],["superman", "wonder woman", "flash"]]
for(let i=0; i<heroes.length; i++){
    console.log(i, heros[i], heros[i].length);
    for(let j=0; j<heros[i].length; j++){
        console.log(heros[i][j]);
    }
}
