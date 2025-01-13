// node 01_Basics/03_conversionOperations.js
let score = "45a"

// console.log(typeof score);

let valInNumber = Number(score)

// console.log(typeof valInNumber);
// console.log(valInNumber);

// "33" => 33
// "42da" => NaN
// true => 1/false => 0

let isLoggedIn = " ";

let boolLogged = Boolean(isLoggedIn);

// console.log(typeof boolLogged);
// console.log(boolLogged);

// 1 => true / 0 => false
// "" => false
// "abc" => true

let bool = false;
let stringbool = String(bool);

// console.log(stringbool);

// ***************************** OPERATIONS **************************************

let val = 3
let negVal = -val
console.log(negVal);

let s1 = "Hello,"
let s2 = " Gurnoor"
let s3 = s1 + s2
console.log(s3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 1 + "2" + 3 + 9);
console.log("2" + true)