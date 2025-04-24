////promise

let myPromise = new Promise((resolve, reject) => {
    let val = 10
    if (val === 10) {
        resolve('its success ')
    } else {
        reject('its false')
    }
})
// myPromise.then((res)=>console.log(res))

let p1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('first')
    },1000)
})
let p2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('second')
    },2000)
})

Promise.all([p1,p2]).then((results)=>console.log(results))
