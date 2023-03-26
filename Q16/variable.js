//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let a = prompt("write a month (Make sure you right month in capitalize for i.e first letter of the month should be capital)")

let month = a

console.log(month)

if(month ==="December" || month ==="January " || month ==="February"){
    alert( "Winter" )
}else if(month ==="September" || month ==="October" || month ==="November"){
  alert("Autumn")
}else if(month ==="March" || month ==="April" || month ==="May"){
  alert("Spring")
}else if(month ==="June" || month ==="July" || month ==="August"){
  alert("Summer")
}else if(""){
  alert("please enter a month")
}else{
  alert("there is no such month exist")
} 
