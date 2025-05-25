// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(1)(2)(3))

function greet(name) {
    return function () {
        console.log('hello', name)
    }
}
const gr = new greet('name')
gr()