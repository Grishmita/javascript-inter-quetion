//Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


let filename = prompt("write file name name with extension ie .txt,.js etc")

function extensionFunc(filename){

    let result = filename.split('.')
    console.log(typeof(result))
    let extension = result[result.length - 1]
    
    console.log(extension)
    alert(`Here is name extesion name :- .${extension}`)
}


extensionFunc(filename)