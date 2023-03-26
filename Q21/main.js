// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


const countries = ["India","America","Germany","Japan","Mexico"]
console.log(countries)

function checkCountry(){
    if(countries.includes('Ethiopia')){
        console.log("it is there")
    }
    else{
            countries.push("Ethiopia")
        }

      return countries  
    }



console.log(checkCountry())    
    

