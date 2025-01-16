// node 01_Basics/datatypes_summary.js
// Primitive Type
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference(Non-Primitive)
// Arrays, Objects, Functions

const id1 = Symbol('123')
const id2 = Symbol('123')
// console.log(id1 == id2);

// const bigNumber = 328732733587789358n // bigint


const arrofStr = ["Hello", "Hi", "Hola"]

const obJ = {
    name:"TT",
    job:"Gand chatai"
}

const funC = function(){ // Object function
    console.log("Funtion Call");
}

// console.log(typeof(id1));

// ****************************************************************************

// Stack, Heap Memory

// Primitive (Stack)
let words = "abcd"
let anop = words
anop = "efgh"

// console.log(words);
// console.log(anop);

//Non-Primitive (Heap)
let userOne = {
    mail : "Hello@gmail.com",
    age : 10
}

let userTo = userOne
userTo.mail = "Hi123@gmail.com"

// console.log(userOne.mail);
// console.log(userTo.mail);
