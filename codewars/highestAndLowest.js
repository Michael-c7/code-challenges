// My solution
function highAndLow(numbers) {
    // turn array of string with numbers into an array WITH numbers
    let nums = numbers.split(" ").map((item => Number(item)))
    
    let numMax = Math.max(...nums)
    let numMin = Math.min(...nums)
  
    return numMax + " " + numMin
}



// A past solution I did
function highAndLow2(numbers) {
    let nums = [];
    let strArr = numbers.split(" ");
    let numsSorted = [];
  
    // convert numbers provided to the number data type
    strArr.forEach(item =>  nums.push(Number(item)));
  
    
    let numbsSorted = nums.sort((a,b) => a - b);
    let largestNum = numbsSorted[numbsSorted.length - 1];
    let smallestNum = numbsSorted[0];
    
    let result = `${largestNum.toString()} ${smallestNum.toString()}`
    return result;
}