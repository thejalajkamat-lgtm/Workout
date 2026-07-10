//CONDITIONAL STATEMENTS
//Q1. If age under 18 then deny access, else >21 full access else partial access
// let age = Number(prompt("Enter your age: "))
// if(age>=18){
//     if(age>=21){
//         console.log("Full Access")
//     }else{
//         console.log("Partial Access")
//     }
// }else{
//     console.log("Deny Access")
// }

//Q2.Calculator
// let num1 = Number(prompt("Enter the first number: "))
// let num2 = Number(prompt("Enter the second number: "))
// let op = prompt("Enter the operator: A=+, B=-, C=%, D=/, E=*")
// if(op == 'A'||'a'||"+"){
//     console.log(`${num1}+${num2}=${num1 + num2}`)
// }else if(op == 'B'||'b'||"-"){
//     console.log(`${num1}-${num2}=${num1 - num2}`)
// }else if(op == 'C'||'c'||"%"){
//     console.log(`${num1}%${num2}=${num1 % num2}`)
// }else if(op == 'D'||'d'||"/"){
//     console.log(`${num1}/${num2}=${num1 / num2}`)
// }else if(op == 'E'||'e'||"*"){
//     console.log(`${num1}*${num2}=${num1 * num2}`)
// }else{
//     console.log("INVALID INPUT!")
// }


//STRING
//Q1.Reverse a string
// let str1 = prompt("Enter a string: ")
// let i=0
// let reverseStr = "";
// for(i=str1.length-1;i>=0;i--){
//         reverseStr += str1[i];
// }
// console.log(reverseStr);

//Q2.Number of vowels
// let str2 = prompt("Enter a string: ")
// let i = 0
// let count = 0
// for(i=0;i<str2.length;i++){
//         if("aeiouAEIOU".includes(str2[i])){
//                 count++
//         }
// }
// console.log(count)

//Q3.Email as password jalaj@gmail.com = j****@gmail.com
// let email = prompt("Enter an email: ")
// let new_email1  = email.slice(1, email.indexOf("@") )
// if (email.includes("@") && email.endsWith(".com")){
//         for(i=0;i<new_email1.length;i++){
//                 new_email1 = new_email1.replace(new_email1[i], "*")
//         }
//         new_email = email[0] + new_email1 + email.slice(email.indexOf("@"))      
//         console.log(`new email is ${new_email}`)
// }else{
//         console.log("INVALID email")
// }

/*//Q4.Jalaj Nitin Kamat = J.N.K
let name = prompt("Enter the full name: ")
let part = name.split(" ")
let initials = part.map(word=>word[0].toUpperCase()).join(".")
console.log(initials)*/

//Q5.Password = 8 characters long + atleast one uppercase + atleast one lowercase + atleast one numeric. Now validate this password
// let password = prompt("Enter a password: ")
// let numeric ="1234567890"
// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lower = "abcdefghijklmnopqrstuvwxyz"
// for(i=0;i<password.length;i++){
//         if(password.length<8 && lower.includes(password[i]) && upper.includes(password[i])){
//                 console.log("VALID password")
//         }else{
//                 console.log("INVALID password")
//         }
// }

//Q6.Remove duplicates from an array
let arr = prompt("Enter the array elements separated by comma: ").split(",").map(Number)
let uniqueArr = []
for(i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])==i){
                uniqueArr.push(arr[i])
        }
}
console.log(uniqueArr)

//Q7.From an array of numbers, create a new array containing only the squares of the even numbers
let arr = prompt("Enter the array elements separated by comma: ").split(",").map(Number)
let squareEvenArr = []
for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
                squareEvenArr.push(arr[i]**2)
        }
}
console.log(squareEvenArr)