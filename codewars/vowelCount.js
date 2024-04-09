// The general solution you'd expect
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


// Solution without any built in javascript methods
// function getCount(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
  
//   // Iterate through each character of the input string
//   for(let i = 0; i < str.length; i++) {
//     let isVowel = false;
    
//     // Check if the current character is a vowel
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         isVowel = true;
//         break;
//       }
//     }
    
//     // If the current character is a vowel, increase the count
//     if (isVowel) {
//       count++;
//     }
//   }
  
//   return count;
// }