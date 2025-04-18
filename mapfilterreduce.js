////////map
let arr=[1,2,3,4,5]
let doubledArr=arr.map(num=>num*2)

console.log(doubledArr)

//////filter
let arr1=[1,2,3,4,5,6]
let filterArr=arr1.filter(num=>num%2==0)
console.log(filterArr)

let filterGreater=arr1.filter(num=>num>3)
console.log(filterGreater)

/////reduce
let arr2=[1,2,3,4,5]
let reducedArr=arr.reduce((a,b)=>a+b)
console.log(reducedArr)