//Arithetic Operators
let a = 5;
let b = 2;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);   //Modulus
console.log("a ** b = ", a ** b); //Expotentition
console.log(`a ** b = ${a ** b}`); //TEMPLATE LITERAL

//a++ = a+1; a-- = a-1 [UNARY OPERATOR]
a++;
console.log("a = ", a);
b--;
console.log("b = ", b);
console.log(`5==2 is ${a == b}`);


//[ASSIGNMENT OPERATOR =  =, +=, -=, *=, %=, **=
//eg a += 1 means a = a + 1]
let c = 4;
c += 4;  //c = c + 4
console.log("c = ", c)


//[COMPARISON OPERATORS =  ==, !=, !==(not equal to & type), ===(equal to & type)]
console.log("a not equal to b is ", a != b)

//OPERATOR PRECEDENCE --> ()  >>  **  >>  *, /,%  >>  +,- 9,7,7