function hello(){    // function definition
    console.log("Hello")
}
hello() // function call

function print1to5(){
    for(let i=1;  i<=5; i++){
        console.log(i)
    }
}
print1to5() // function call

//Function with Arguments
function add_num(a,b){
    console.log(a+b)
}
add_num(2,3)

//function that gives the us avg of 3 numbers
function avg_num(a,b,c){
    console.log(`Averaage of ${a} ${b} ${c} is ${(a+b+c)/3}`)
}
avg_num(2,3,4)

//Function that prints the multiplication table of a number
function mul_table(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
mul_table(5)

                       //RETURN STATEMENT//
function sum(a,b){
    return a+b
}
let s = sum(3,4)
console.log(s)

function sub(a,b){
    return a-b
}
console.log(sub(5,3))

//FUNCTION THAT RETURNS THE SUM OF NUMBERS FROM 1 TO N
function sum_num(n){
    let sum_ = 0;
    for (let i=1; i<=n;i++ ){
        sum_ += i
    }
    return sum_;
}
console.log(sum_num(5))

//FUNCTION THAT RETURNS THE CONCATENATION OF ALL STRINGS IN AN ARRAY
let str = ["hi", "hello", "bye", "!"]
function concat(str){
    let result;
    for(let i=0;i<str.length;i++){
    result += str[i];
    }
    return result;
}
console.log(concat(str))

//LEXICAL FUNCTION
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x); //not possible cos x is not defined in innerFunc but it can access x because of lexical scoping
    }
    innerFunc();
}

//FUNCTION EXPRESSIONS
let som = function(a,b){
    return a+ b
}
som(2,3) // 5

//HIGHER ORDER FUNCTION
/* Function does one or both
1) takes one or multiple functions as arguments
2) returns a function */
function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet, 3) // Hello Hello Hello

//HIGHER ORDER THAT RETURNS A FUNCTION
function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }else {
       console.log("Invalid request");
    }
}

//METHODS
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

//Q3. Write a JS Function that accepts a list of country names as input and reutrns the longest country name as output
let country = prompt("Enter the name of countries separated by commas: ").split(",")
function largest_country(countrylist){
    let ans = countrylist[0]
    for(let i=0; i<countrylist.length; i++){
        if(countrylist[i].trim().length > ans.trim().length){
            ans = countrylist[i]
        }
    }
    return ans
}
console.log(`The largest country is ${largest_country(country)}`)