// const tinderUser = new Object ()

const tinderUser = {}
tinderUser.id = "123Abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false



// console.log(tinderUser);


const regularUser = {
    email: "sammy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mursaleen",
            lastname: "Ismail"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 = { obj1, obj2, obj3 }
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1 ,...obj2,...obj3}

// console.log(obj4);



const Users=[
    {
        id:"1",
        email:"h@gmail.com"
    },
    {
        id:"2",
        email:"h@gmail.com"
    },
    {
        id:"3",
        email:"h@gmail.com"
    }
]

// console.log(Users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn") );