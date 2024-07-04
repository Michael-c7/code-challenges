function isIsogram(str) {
  let originalArr = [...str.toLowerCase()];
  let uniqueArr = Array.from(new Set(...[originalArr]));
  return originalArr.length === uniqueArr.length ? true : false;
}