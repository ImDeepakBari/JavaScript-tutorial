// array

// defining array
const myArray = [10,1,3,56,7,8,10]

// another way
const myHero = new Array("Superman", "Batman", "Ninja")
console.log(myHero)

// accessing array with index
console.log(myArray[0])
console.log(myArray[7])  // access element out of range will return undefined

// pop() and push()

const myNewArray = ["Deepak", "Sandeep", "Sai", "Anurag"]

// add item to array => to last index of array
myNewArray.push("Tasneem")
myNewArray.push("Aniket")

console.log(myNewArray)

// remove item => it removes item for last and return item

console.log(myNewArray.pop()) // this will remove item from last of array and return item
console.log(myNewArray)

// unshift() and shift()

const MyCats = ['sundari', 'sundar', 'motu', 'patlu puch', 'bittri']
MyCats.unshift('lambu')  // here it will add item to first

console.log(MyCats)
MyCats.shift() // remove first item from array

console.log(MyCats)

// cheking the presece of items
console.log(MyCats.includes('motu'))  // retrun boolean values
console.log(MyCats.includes('n'))

console.log(MyCats.indexOf('motu'))
console.log(MyCats.indexOf('pandey')) // if item is not present it will return -1 value


// using join()
const newName = MyCats.join()  // join all the items in array and retrun string object
console.log(newName)
console.log(typeof newName)

// slice and splice()
const myAr1 = [0,2,4,6,8,10,12,14,16]
console.log(myAr1)

//slice
const sliceArr = myAr1.slice(1, 5) // does not inclue the range& do not manipulate original array
console.log(sliceArr)  
console.log(myAr1)

//splice
const spliceArr = myAr1.splice(1,5) // it includes the range also and manipulate original array 
console.log(spliceArr)
console.log(myAr1)

