// array

const marvelHeros = ['Thor', 'ironMan', 'spiderMan']

const dcHeros = ['batMan', 'flash', 'superMan']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// concat()

// const updatedHeros = marvelHeros.concat(dcHeros)
// console.log(updatedHeros);


// spread operator
const newHeros = [...marvelHeros , ...dcHeros, 'Hulk']
console.log(newHeros)


// flat()  -- used to flat the complex recurssicve aaray within array
const complexArr = [1, 3,5,[2,5,7], [2,6,[2,7,9]]]
const updatedArr = complexArr.flat(Infinity)
console.log(updatedArr.length)


// check array
console.log(Array.isArray("Deepak")) //check if it is array or not return boolean value

console.log(Array.from("ImDeepakBari")) // create a array from given

// of() ==> used to create a array from iterable
let score = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score,score2, score2, score3))
