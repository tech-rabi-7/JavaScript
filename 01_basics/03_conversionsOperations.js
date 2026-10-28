// eg1:
let score = "18"
console.log(typeof score)

let valueInNumber =Number(score)
console.log(typeof(valueInNumber))

// eg 2:
let age="21+"
console.log(age)

let ageInNumber = Number(age)
console.log(typeof ageInNumber)
console.log(ageInNumber)    // everythng can't converted

let isLoggedIn =1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1 ="";
let booleanIsLoggedIn1 = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn1)
// 1-> true,    0->false,   ""->false     "rabi"->true