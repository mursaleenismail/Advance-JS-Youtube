// Primitive
//  7 Types : String , Number , boolean ,null,Undefined,Symbol,BigInt

const score = 100;
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol ('123')

console.log( id === anotherId);
// Referene ( Non-Primitive )
//  Array,Objects, Functions

const bigNumber = 32145457266421n


const myFunction = function (){ 
    console.log("Helllo World");
}

console.log( typeof score );