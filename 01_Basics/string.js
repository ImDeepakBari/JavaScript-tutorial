
const name = "Deepak"
const age = 28

// concatinate string
console.log(`My name is ${name} and I am ${age} yrs old !!`)


const avatarName = new String("ImDeepak23")
console.log(avatarName[0])  //access first object element
console.log(avatarName.length)

console.log(avatarName.toUpperCase()) // to convert to upper
console.log(avatarName.toLocaleLowerCase()) 

console.log(avatarName.charAt(2))  // return charater at index 

console.log(avatarName.indexOf("3")) // return index position of charater in string

const teamName = "Terminatar-Super-human"
console.log(teamName.slice(0, 4)) //slice a string with -ve index as well
console.log(teamName.substring(0, 4))  //slice a string start, end

console.log(teamName.slice(2, -5)) //slice a string with -ve index as well
console.log(teamName.substring(0, 8))  //slice a string start, end


const split = teamName.split('-')
console.log(split)

