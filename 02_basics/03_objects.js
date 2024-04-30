// constructor operators


//  object literals
  
const mySym = Symbol("Key1")

const JsUser ={
    name :"Mursaleen",
    "full name" :"Mursaleen Ismail",
    age:22,
    [mySym]:"myKey1",
    email:"mursaleen@gmail.com",
    isLoggedIn:false,
    lastLoginDays:[ "Monday","Saturday" ]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser [mySym])

JsUser.email="mursaleendev@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email="mursaleennoor@gmail.com"
// console.log(JsUser);


JsUser.greeting= function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo= function(){
    console.log(`Hello JS User,${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

