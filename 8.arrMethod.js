//Array methods
//Push(): add to end
let foodItems = ["potato", "apple", "litchi", "tomato"]
foodItems.push("chips", "burger")
console.log(foodItems);

//Pop():delete from end & return
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log(deletedItem);

//Concat(): joins multiple arrays & returns result
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);


//UNSHIFT():add to start & SHIFT():delete from start & return
let indianHeroes = ["mulla", "niraj", "jalaj"];
indianHeroes.unshift("antman");
console.log(indianHeroes)
let val = indianHeroes.shift()
console.log(indianHeroes, "deleted", val)


//SLICE(): returns a piece of the array
//SPLICE(): change original array (add, remove, replace)
let studentNames = ["rahul", "rohit", "varun","jalaj", "niraj", "patrick"]
console.log(studentNames.slice(1,4));
console.log(studentNames.splice(1,2, "mulla"))