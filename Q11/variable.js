//Use the Date object to do the following activities

let d = new Date()

year = d.getFullYear()
console.log(year)

month = d.getMonth()
console.log(month)

date = d.getDate()
console.log(date)

day = d.getDay()
console.log(day)

day = d.getHours()
console.log(day)

minutes = d.getMinutes()
console.log(minutes)

//Find out the numbers of seconds elapsed from January 1, 1970 to now.

seconds = Math.floor(d.getTime()/1000)
console.log(milliseconds)