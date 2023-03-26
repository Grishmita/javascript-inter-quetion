//17. Write a program which tells the number of days in a month.

let a = prompt("write a month (Make sure you right month in capitalize for i.e first letter of the month should be capital)")

let month = a

let d = new Date();
let currentYear = d.getFullYear();
console.log(currentYear);
let daysInFebruary = new Date(currentYear, 2, 0).getDate();
console.log(`The number of days in February ${currentYear} is ${daysInFebruary}.`);


console.log(month)

if(month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December"){
 alert("This month have 31 days")
}else if(month === "April" || month === "June" || month === "September" || month === "November"){
  alert("This month have 30 days")
}else if( month ==="February"){
  alert(`It has ${daysInFebruary} days`)
}else{
  alert("there is no such month exist")
} 


