//singleton
// object.create

// object literals
const userName = {
    'name': 'Deepak',
    'city': 'bengaluru',
    'org': 'GL',
    'country': 'India',
    'isMarried': false,
    'age': 25

}
console.log(userName.name) // access object by keyname using dot operator
console.log(userName['age']) //access object using square bracket

// create a symbol
 const mySymbol = Symbol('key12')

// how can symbole be used in object as key-value 
const newObject = {
    name :"ImDeepak",
    age: 30,
    origin:'india',
    [mySymbol]:'mySymbolKey' // adding symbol within object

}
console.log(newObject[mySymbol]) // accessing symbol
console.log(newObject.age)

//upadte or change values on object
newObject['origin'] = 'Denmark';
newObject.age = 25 ;
newObject['isMarried'] = false;
console.log(newObject)

// to freeze the object
// this will prevent form updating values in object

// Object.freeze(newObject)
// newObject.age = 77
// console.log(newObject)

// adding fucntion inside object
// using ' this ' keyword to access the current object properties

newObject.greeting = function(){
    console.log(`Hello ${this.name} welcome to function in JS -object class.`);
}
console.log(newObject.greeting())
console.log(newObject)