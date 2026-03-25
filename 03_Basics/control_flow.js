//if
if (true){
    console.log("Execution")
}

const isloggedIn = false

if (isloggedIn != false){
    console.log("this will execute only if isLoggedIn is equal to false!!!")
}


// Using else if 
let age = 40
const isRich = true
if (age <= 20){
    console.log("age is less than 20")
}
else if(age >= 20){
    console.log("Age is grater than 20")
}
else{
    console.log("Does not match any condition!!")
}

// && == AND , || == OR operator
if (age > 20 && isloggedIn) {
    console.log("Age is greater than 20 and user is loggedIn!")
    
}

if (age > 20 || isRich == false){
    console.log("This will execute if any of condition are met")
}


// short-hand notation for if-else
const balace = 30
if (balace == 30) console.log("Balace is eql to 30");

