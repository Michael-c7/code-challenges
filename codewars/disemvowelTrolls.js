function disemvowel(str) {
    const vowels = "aeiou";
  
    let strArr = [];
    
    /*loop through each letter & check if its a vowel,
    if it is get its index and push it into an array*/
    for(let i = 0; i < str.length; i+=1) {
      // check if its a vowel
      if(!vowels.includes(str[i].toLowerCase())) {
          strArr.push(str[i]);
      }
    }
    
    let sanitizedStr = strArr.join("");
    return sanitizedStr;
  }