function getMiddle(s) {
    if(s.length <= 1) return s
      
    let middleIndex = Math.floor(s.length / 2)
    let even = s.length % 2 === 0
    
    let evenStartIndex = middleIndex - 1
    let evenEndIndex = middleIndex + 1
    
    
    if(even) {
      return s.substring(evenStartIndex, evenEndIndex)
    } else {
      return s.charAt(middleIndex)
    }
}