function descendingOrder(n) {
    // convert the numbers eg: 123234 to an array of numbers eg: 1,5,7,5
    let numArray = n.toString().split("").map((num) => Number(num))
    // sort number in the correct order
    let numArraySorted = numArray.sort((a,b) => a - b).reverse()
    // convert sorted array as a single number
    let result = Number(numArraySorted.join(""))
    return result
}