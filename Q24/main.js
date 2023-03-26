let evenArray =[]
let oddArray =[]


function evenFuncArray(){
    for(i=0; i<=100; i++){
        if(i%2 == 0){
            evenArray.push(i)
        }

    }
    console.log(`here is the even numbers from 0 to 100 ${evenArray}`)
}

evenFuncArray()

function oddFuncArray(){
    for(i=0; i<=100; i++){
        if(i%2 !== 0){
            oddArray.push(i)
        }

    }
    console.log(`here is the odd numbers from 0 to 100 ${oddArray}`)
}

oddFuncArray()