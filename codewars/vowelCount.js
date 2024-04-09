function getCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    
    for(let i = 0; i < str.length; i++) {
        // if current input contains a vowel add 1 to count
      if(vowels.indexOf(str[i]) > -1) {
        count++;
      }
    }
    return count;
}