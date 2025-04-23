///foreach

let arr = [1, 2, 3, 4, 5]
arr.forEach((num, index) => {
    console.log(num, 'and', index)
})

let sum = 0
arr.forEach((num) => {
    sum = num + sum
})

console.log(sum)