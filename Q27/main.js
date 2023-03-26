//Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let primeArr =[]


for(i=2; i<=100; i++){
    isPrime = true

    for(j=2; j<= Math.sqrt(i); j++){
        if(i % j == 0){
            isPrime = false
            break;
        }
    }
    if (isPrime) {
        primeArr.push(i)
        console.log(primeArr)
      }
}

console.log(primeArr)






