//Create a human readable time format using the Date time object

let d = new Date()


//ISO Date
let dateObj = {
    year : d.getFullYear(),
    month : d.getMonth() + 1,
    date: d.getDate(),
    hours: d.getHours(),
    minutes: d.getMinutes()
   
}  

console.log(dateObj.year.toString())
console.log(dateObj.date.toString().padStart(2, '0'))
console.log(dateObj.month.toString().padStart(2, '0'))
console.log(dateObj.hours.toString().padStart(2, '0'))
console.log(dateObj.minutes.toString().padStart(2, '0'))

console.log()


let theYear = dateObj.year.toString()
let theDate = dateObj.date.toString().padStart(2, '0')
let theMonth = dateObj.month.toString().padStart(2, '0')
let theHours = dateObj.hours.toString().padStart(2, '0')
let theMinutes = dateObj.minutes.toString().padStart(2, '0') 

//- YYYY-MM-DD HH:mm
console.log(`${theYear}-${theMonth}-${theDate}  ${theHours}:${theMinutes}`)

//- DD-MM-YYYY HH:mm
console.log(`${theDate}-${theMonth}-${theYear}  ${theHours}:${theMinutes}`)

//- DD/MM/YYYY HH:mm
console.log(`${theDate}/${theMonth}/${theYear}  ${theHours}:${theMinutes}`)

