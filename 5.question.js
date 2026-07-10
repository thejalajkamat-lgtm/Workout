//Print all even nos from 0 to 100
for(let num=0; num<=100; num++) {
    if(num% 2 === 0)
    console.log("num = ",  num);
}

//Create a game where you start with any random game number. Ask the user to keep guessing number until the user enters correct value
let gameNum= 7;
let userNum = Number(prompt("Enter your num: "));
console.log(userNum)
while(userNum != gameNum) {
    userNum = Number(prompt("Wrong guess! Try again!"));
}
console.log("CONGRATULATION! U guessed the right number")