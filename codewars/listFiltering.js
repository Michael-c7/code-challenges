function filter_list(l) {
    let result = l.filter((el) => typeof el === "number")
    return result
}