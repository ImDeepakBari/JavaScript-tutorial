let score = "11s"

console.log(typeof(score));
console.log(typeof score); // checking type of variables


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber) //here it will return NaN. (Not a Number)


// NaN => This will be returned whenever a conversion is not happing eg string to int type

let isLoggedIn = ''

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//Conversion of datatypes in Boolean
// 1 = true , 0= false
// " " = false
// "deepak" = true


let someNumber = 4

let stringNumber = String(someNumber)
console.log(stringNumber)

console.log(typeof stringNumber)