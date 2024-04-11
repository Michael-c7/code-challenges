// normal solution
function spinWords(string) {
    let str = string.split(" ")
    
    let reverseStr = str.map((el) => {
      if(el.length >= 5) {
        return el.split("").reverse().join("")
      }
      return el
    }).join(" ")
    
    return reverseStr
  }


  
//  One liner version
function spinWords(string) {   
    let reverseStr = string.split(" ").map((str) => str.length >= 5 ? str.split("").reverse().join("") : str).join(" ")
    return reverseStr
}