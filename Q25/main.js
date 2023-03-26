//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.


let weight = prompt("Enter your weight in kg")
let weightNum = parseInt(weight)
console.log(weightNum)

let height = prompt("Enter you height in meters")
let heightNum = parseInt(height)
console.log(heightNum)

function bmiCalculator(weightNum, heightNum){

    let bmi = weightNum/(heightNum*heightNum)

    console.log(bmi)

    if( bmi < 18.5 ){
       alert("Underweight")
    }else if(bmi = 18.5 || bmi <= 24.9){
        alert("Normal weight")
    }else if(bmi = 25 || bmi <= 29.9){
        alert("Over weight")
    }else(
        alert("Obese")
    )


}
bmiCalculator(weightNum, heightNum)