const list = [1, 2, 3, 4, 5];
console.log("forEach: ");
list.forEach((value, index) => {
  console.log(`value: ${value}, index: ${index}`);
});

console.log("map: ")
const newList = list.map((value, index) => {
  return value * 2
})
console.log(newList)

console.log("some: ")
const hasEven = list.some((value, index) => {
  return value % 2 == 0
})
console.log("hasEven", hasEven)

console.log("every: ")
const allEven = list.some((value, index) => {
  return value % 2 == 0
})
console.log("allEven", allEven)

console.log("allEven", allEven)

console.log("filter: ")
const evenList = list.filter((value, index) => {
  return value % 2 == 0
})
console.log(evenList)

console.log("reduce: ")
const sum = list.reduce((prev, cur, curIndex) => prev + cur)
console.log(sum)



