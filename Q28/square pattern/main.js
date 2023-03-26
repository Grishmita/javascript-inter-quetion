//Write a program to print the given patterns using the loops-
 
//Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
let num = 2
let star =""

///Square Pattern

for(let a=0; a<=num; a++){

    for(let b=0; b<=num; b++){
        star += "* "
    }

    star += "\n  \n"
}
console.log(star)






