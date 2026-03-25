//truthy

const email = 'imDeepak@yahoo.com'

if (email){
    console.log("Received user email")

}
else{
    console.log("No user email is found!!")
}

// FALSY => false, -0, 0, BigInt(0n), "", null, undefined, NaN

// *********TRUTHY***********
// "0" within string it will be a truthy value
// "fasle" this is also a truthy value
// " " adding space to empty string
// [], {}, fucntion(){}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){

    console.log("Object is empty")
}


// nullish coalescing operator(??)
let var1 ;

var1 = null ?? 20

var1 = undefined ?? 89

var1 = 100 ?? 98 ?? 78

var1 = null ?? 8 ?? 20
console.log(var1)

// Terniary operator
// condition ? true : false
 const tea = 800
 tea >= 700 ? console.log("tea is greater than 700"): console.log("tea is less than 700")