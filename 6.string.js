//STRING
let str1 = "Jalaj Kamat";
let str2 = 'Niraj  Kamat';
console.log(str1, "string length is",str1.length, str1[8])
console.log(str2)

//Template Literals
let specialString = `This is a Template Literal or Special String.`;
console.log(specialString)

//OBJECT
let obj = {
    item: "pen",
    price: 10,
};
console.log("the cost of",obj.item, "is", obj.price);
let output = `the cost \t of ${obj.item} \n is ${obj.price}` //using template literals. use \n for next line, \t for big space
console.log(output)

//STRING METHODS OR STRING FUNCTIONS
let str3 = "      friderich     neitzche    ";
console.log(str3)
console.log(str3.toUpperCase())
console.log(str3.toLowerCase())
console.log(str3.trim())
console.log(str3.trim().toLowerCase())//method chaining

let str4 = "abcdefgh "
console.log(str4.slice(1,3));
console.log(str4.slice(5));
let res = str3.concat(str4);
console.log(res)
let res1 = "I am Jalaj Kamat" + str3 + str4
console.log(res1)
console.log(res1.replaceAll("a", "o"))
console.log(res1)
console.log(str4.charAt(4))


//REPEAT
let mssg = "Jalaj"
console.log(mssg.repeat(3))

// Search a value in the string & return a new string with the value replaced
let str5 = "IloveCoding."
console.log(str5.replace("love", "do"))
console.log(str5.replaceAll("o", "x"))


/*Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
eg: user name = "jalajkamat", username should be "@jalajkamat10"  */
let fullName = prompt("Enter your name: ");
let username = "@" + fullName + fullName.length;
console.log(username)

