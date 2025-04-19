/////generator function

function* generatorFn(n){
    for(let i=1;i<n;i++){
        yield n*i
    }
}
const gen=generatorFn(5)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
