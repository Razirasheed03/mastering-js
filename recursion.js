////////print a countdown//////////

function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);


/////////// print btween start to end ////////////
function printNum(start, end) {
    if (start > end) return
    console.log(start)
    printNum(start + 1, end)
}
// printNum(1, 10)


/////////   sum of positive numbers  //////////
function sum(n) {
    if (n == 0) return 0
    if (n > 0) {
        return n + sum(n - 1)
    } else {
        return 'invalid'
    }
}
// console.log(sum(5))

/////////// reverse a string  /////////

function revStr(str) {
    if (str === '') return '';
    return revStr(str.slice(1)) + str[0]
}
console.log(revStr('razi'))


///////////// reverse a array //////////

function revArr(arr){
    if(arr.length===0) return []
    return [arr[arr.length-1]].concat(revArr(arr.slice(0,-1)))
}
console.log(revArr([1,2,3,4,5]))

/////// flatting array /////////////
function flattenArr(arr){
    let result=[]
    for(let val of arr){
        if(Array.isArray(val)){
            result=result.concat(flattenArr(val))
        }else{
            result.push(val)
        }
    }
    return result
}
console.log(flattenArr([1,2,3,[4,5,6,[7,8]]]))
