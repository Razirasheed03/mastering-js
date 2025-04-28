function palidromeChecker(str){
    let len=str.length-1
    for(let i=0;i<len;i++){
        if(str[i]!==str[len-i]){
            return false
        }
    }
    return true

}
// console.log(palidromeChecker('malayalam'))

function reverseStr(str){
    let reversed=''
    for(let i=str.length-1;i>=0;i--){
         reversed+=str[i]
    }
    return reversed
}
// console.log(reverseStr('hello world'))

function reverseStr(str){
    let words=[]
    let word=" "
    for(let i=0;i<=str.length;i++){
        if(str[i]===" "||i===str.length){
            words.push(word)
            word=""
        }else{
            word+=str[i]
        }
    }
    for(let j=words.length-1;j>=0;j--){
        console.log(words[j])
    }
}
// reverseStr("hello world")



// function arra(...numbers){
//     let sum=0
//     for(let i=0;i<numbers.length;i++){
//         sum=sum+numbers[i]
//     }
//     return sum
// }
// console.log(arra(1,2,3,4,5))

