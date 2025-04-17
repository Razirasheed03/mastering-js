console.log(x)
var x = 'hii its from x and print undefined'


console.log(y)
let y = 'reference error cannot access'



////////==========shadowing==========/////////

var a = 1;

function testScope() {
    console.log(a);
    var a = 2; //////show undefined because hoisting performs and shadow the outer var
}

testScope();
