let obj= {
    a:5,
    b:7,
    d:1
}
let max = 0;
for(let [key,value] of Object.entries(obj)){
    console.log()
    max = Math.max(max,value)
    
}
console.log(max)
delete obj['b']
console.log(obj)
console.log(Object.entries(obj))
