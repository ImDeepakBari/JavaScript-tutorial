//Dates

let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)  // it is object type

console.log(myDate.toString())

console.log(myDate.toJSON())

console.log(myDate.toLocaleDateString())


// defining a date

let newDate = new Date()

let updatedDate = newDate.toLocaleString('default', {
    "weekday":  "long",
     "dayPeriod": "short",
     "calendar": "long"

})
console.log(updatedDate)