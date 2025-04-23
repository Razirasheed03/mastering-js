//////spread

let arr = [1, 2, 3, 4, 5]
let arr1 = [...arr, 6]
console.log(arr1)

const objname = { name: 'razi' }
const objage = { age: 19 }
const fullUser = { ...objname, ...objage }
console.log(fullUser)

/////////rest

function sumAll(...nums) {
   return nums.reduce((a, b) => a + b, 0)
}
console.log(sumAll(1, 2, 3, 4))