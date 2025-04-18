const car={
    brand:'toyota',
    model:2020
}
Object.freeze(car)
car.brand='not changable'

const carseal={
    brand:'toyota',
    model:2021
}
Object.seal(carseal)

carseal.brand ='changable'


console.log(carseal.brand)

console.log(car.brand)