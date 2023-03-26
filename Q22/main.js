// 22. The following is an array of 10 students ages


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort((a, b) => a - b))

// Sort the array and find the min and max age
const maxAge = Math.max(...ages)
console.log(maxAge)
const minAge = Math.min(...ages)    
console.log(minAge)

//Find the average age(all items divided by number of items)
let total = ages.reduce((acc,curr) =>{
    return acc = acc + curr
},0)
let avg = total/ages.length 
console.log(avg + "average")


//Find the median age(one middle item or two middle items divided by two)
let median;

if(ages.length%2 !== 0){
    let ansMedian = Math.floor(ages.length/2)
    median = ages[ansMedian]
}else{
    let ansMedian = Math.floor(ages.length/2)
    console.log(ages[ansMedian]+`dfs`)
    median = (ages[ansMedian] + ages[ansMedian -1])/2 
}

console.log(median)

//Find the range of the ages(max minus min)
let range = maxAge - minAge
console.log(range)


//Compare the value of (min - average) and (max - average), use abs() method

const minAvg = Math.abs(minAge - avg)
console.log(minAvg)

const maxAvg = Math.abs(maxAge - avg)
console.log(maxAvg)







