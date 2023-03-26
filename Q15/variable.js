//Write a program which can give grades to students according to theirs scores:

let a = prompt("Enter your marks I'll give your grades")

console.log(a)




if(a >= 80 && a <= 100){
    alert("Your grade is A")
}else if(a >= 70 && a <= 89){
    alert("Your grade is B")
}else if(a >= 60 && a <= 69){
    alert("Your grade is C")
}else if(a >= 50 && a <= 59){
    alert("Your grade is D")
}else if(a >= 0 && a <= 49){
    alert("Your grade is F")
}
