//Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

const word1 = "    Hello, World!    "
const word2 = "    cat    "
const word3 = "    mat    "


const string1 = word1
const string2 = word2
const string3 = word3

console.log(string1)
console.log(string1.trim())

console.log(string2)
console.log(string2.trimEnd())

console.log(string3)
console.log(string3.trimStart())    


//trim() function/method is use to trim the whitespace around the string so you see the trim() in string1 example removes  white space from left and right
//The trim fucntion also have trimStart which remove white space from start of the string2(As shown  above) and it also have trimEnd() which remove whitespace from end of the string3 (As shown  above)