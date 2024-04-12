function squareDigits(num) {  
    let numsArray = num.toString().split("").map((el => Number(el)))
    let squareNums = numsArray.map((number) => Math.pow(number, 2))
    return Number(squareNums.join("")) 
  }