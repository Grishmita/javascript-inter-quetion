//10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//- 4 > 3
console.log(4 > 3)

//- 4 >= 3
console.log(4 >= 3)

//- 4 < 3
console.log(4 < 3)

//- 4 <= 3
console.log(4 <= 3)

//- 4 == 4
console.log(4 == 4)

//- 4 === 4
console.log(4 === 4)

//- 4 != 4
console.log(4 != 4)

//4 !== 4
console.log(4 !== 4)

//- 4 != '4'
console.log(4 != '4')

//4 == '4'
console.log(4 == '4')

//4 === '4'
console.log(4 === '4')


//Find the length of python and jargon and make a falsy comparison statement.
const pythonLength = "python".length
const jargonLength = "jargon".length 
console.log(pythonLength)
console.log(jargonLength)

if(pythonLength && jargonLength === 5){
    console.log('its truthy statement')
}else{
    console.log('its falsy statement')
}