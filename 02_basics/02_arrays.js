// const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes [3][2]);

 const allHeros = marvel_heroes.concat(dc_heroes);
console.log(allHeros);

const all_new_heros = [...marvel_heroes,...dc_heroes]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array );

console.log(Array.isArray("Mursaleen"));
console.log(Array.from("Mursaleen"));
console.log(Array.from({name:"Mursaleen"}));  //Intersting 

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));


