///pure function

function add(a, b) {
    return a + b
}

///impure function has sideeffects

let x = 15;
function add(a) {
    x = x + a
    return x
}

// console.log(add(10))