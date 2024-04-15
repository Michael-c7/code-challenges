function solution(number) {
    if(number < 0) return 0; // if a number is negative, return 0
    
    let multiplesOfThree = []
    let multiplesOfFive = []
    let uniqueNumsArr = []
    
    for(let i = 0; i < number; i++) {
      if(i % 3 === 0) {
        multiplesOfThree.push(i)
      }
      
      if(i % 5 === 0) {
        multiplesOfFive.push(i)
      }    
    }
    
    // join
    let uniqueNums = new Set(multiplesOfThree.concat(multiplesOfFive))
    uniqueNums.forEach((num) => {
      uniqueNumsArr.push(num)
    });
    
    
    let result = uniqueNumsArr.reduce((a,b) => a + b, 0);
    
    return result;
    
  }
  
  
  /*
  Goal : return the sum of all the multiples of 3 or 5 below the number passed in
    - If the number is a multiple of both 3 and 5, only count it once
    - if a number is negative, return 0 [X]
  ---
  Steps
  ---
  1. if number less than zero return zero
  
  2. get the mutiples of 3 (put into an array)
    - loop through and check aginst the modulus of something(dont know what yet (do for step 3 as well))
  
  3. get the multiples of 5 (put into an array)
  
  4 combine step 2 & 3's are and check for unique value(use a set)
    - doing this becuase If the number is a multiple of both 3 and 5, only count it once  