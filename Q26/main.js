//Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-


let userInput =  prompt("Write the number of which you want table of")

let num = parseInt(userInput) 


function tableFunc(num){
    for(i=0; i<=10; i++){
      
        const result = i * num;

        console.log(result) 
    }

}

tableFunc(num)