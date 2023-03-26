// Write a program to check that the number given by the user is a prime number or not.



const num = prompt('write a number')

if(num < 1 || num == 1  ){
    console.log("it not a prime nor composite number")
}else{
    isPrime = true;
    for(i=2; i < num; i++){
        if(num%i==0){
            isPrime = false;
            break;
        }
    }
     if (isPrime) {
        alert(`${num} is a prime number`);
    } else {
        alert(`${num} is not a prime number`);
    }
}






