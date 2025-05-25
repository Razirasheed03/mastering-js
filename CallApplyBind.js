// const user1={
//     name:'razi'
// }
// const user2={
//     name:'nadeem'
// }
// function greet(greeting,emoji){
//     console.log(`${greeting} ${this.name}, ${emoji}`)
// }

// ///call
// greet.call(user2,'welcome','🤝')

// ///apply
// greet.apply(user1,['welcome','🤝'])

// ///bind
// const binding=greet.bind(user2)
// binding('welcome','🤝')



const user1 = {
    name: 'nadeem'
}
const user2 = {
    name: 'razi'
}

function borrow(geeting) {
    console.log(`${geeting},${this.name}`)
}

// borrow.call(user2,'welcome')
// borrow.apply(user2,['heelomonu'])
// const binding=borrow.bind(user1)
// binding('helloo')

