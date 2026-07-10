// Primitive Datatypes => are CALL BY VALUE
// 7 Types : String ,Number , Boolean , Null , Undefined , Symbol , Bigint 

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 437874793937912799n;




// Reference OR Non Primitive Datatypes => are Call by Reference

// Arrays , Objects , Functions


const heroes = ["shaktiman", " batman", "doggy don"]   // ARRAYS

// OBJECTS

let myObj = {
    name :"Rishi", 
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);



// type of Null is Object
//  Return type of Non Primitives is Object
//  Return type of Functions is ObjectFunction