const square = x => x * x

const double = x => x * 2


// double(3) = 6
// square(6) = 36

const result = square(double(2))
console.log(result)
