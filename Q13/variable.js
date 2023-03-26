//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let a = prompt("Enter your age")

console.log(a)


if( a >= 18){
    alert("You are old enough to drive")
}else{
    let age = 18 - a
    alert(`wait for this many age :- ${age} `)
}

// if( a % 2 == 0){
//     console.log("yee")
// }else{
//     console.log("no")
// }
