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

const heros = ["Superman","Thor","Marvel"]

let myObj={
    name:"Mursaleen",
    age:22,
}

const bigNumber = 32145457266421n


const myFunction = function (){ 
    console.log("Helllo World");
}

console.log( typeof score );

//++++++++++++++++++++++++++++++++++++++\\

let myYoutubeName= "Morrowdotcom"

let anotherName= myYoutubeName
anotherName="Chai aur Code"

console.log(anotherName);
console.log(myYoutubeName);

let userOne={
    email:"usergoogle.com",
    upi:"user@ybl"
}
let userTwo = userOne


// userTwo.email = "mursaleen@google.com"
userTwo.upi = "user@mcb"

// console.log(userOne.email);
// console.log(userTwo.email);

console.log(userOne.upi);
console.log(userTwo.upi);