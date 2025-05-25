function first(callback) {
    setTimeout(() => {
        console.log('first')
        callback()
    }, 1000)
}
function second(callback) {
    setTimeout(() => {
        console.log('second')
        callback()
    }, 2000)
}
// first(()=>{
//     second(()=>{
//         console.log('task completed')
//     })
// })

/////////call back hell formed ⬆️ 

//////////resolving it through promise⬇️

function first() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('first completed')
            resolve()
        }, 1000)
    })
}
function second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('second completed')
            resolve()
        }, 1000)
    })
}

// first()
// .then(()=>second())
// .then(()=>console.log('task completed'))



////////call back hell solving using async await (more optimized ) ⬇️

const runAsync = async () => {
    await first();
    await second();
    console.log('task complete')
}


const s1 = new Promise((res, rej) => {
    resolve('hii from here')
})