// Dates

let myDate = new Date ()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// Own Created Date

// let myCreateDate = new Date (2023,0,23)
// let myCreateDate = new Date (2023,0,23 ,5,3)
// console.log(myCreateDate.toDateString()); 

let  myCreateDate = new Date( "01-14-2023" )
// console.log(myCreateDate.toLocaleString()); 


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log  (Date.now()/1000);
// console.log  (Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() );


`${ newDate.getDay()} and this Time is ${newDate.getTime() }`
  

newDate.toLocaleString( 'default',{
    weekday: "long",
    
})
