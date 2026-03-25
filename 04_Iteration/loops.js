// for loop

for(let i = 0; i <= 10; i++){
    const element = i;
    if (element == 6){
        console.log(" 6 is found!!")
        break;
    }
    console.log(element);
    
}
// console.log(element)
// console.log(i)


// nested for loop
for(let i = 0; i <= 10; i ++){
    console.log(`Outer loop value of i: ${i}`);
     
    for(let j = 0; j <=10; j ++){
        console.log(`Inner loop of j : ${j} and outer loop of i : ${i}`)
    }

}


// loop over aaray item
const myArray = ["flash", 'batman', 'superman', 'terminator', 'spiderman', 'ironman']

for (let i = 0; i < (myArray.length ); i ++){
    console.log(`Item in index ${i} contain : ${myArray[i]}`)
}


//break and continue

for (let index = 0; index <= 10; index ++){
    
    if (index == 5){
        console.log("Reached Break keyword!!")
        break
    }
    console.log(`Index : ${index}`)
}

const myheros = ['Superman', "Lokhi", 'Knightman', 'WatchMan', "DaredEvil"]
for (let i = 0; i < myheros.length; i++){
    if ("Knightman" === myheros[i]){
        console.log("reached continue keyword");
        continue
    }

    console.log(`Item in index ${i} :${myheros[i]}`);

}