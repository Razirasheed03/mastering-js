function greetUser(name) {
    return `hello from greetuser ${name}`
}
function hocfn(name, callbfn) {
    return callbfn(name)
}
console.log(greetUser('first one'))
console.log(hocfn('second', greetUser))