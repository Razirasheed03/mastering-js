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

let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('first')
    }, 1000)
})
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('second')
    }, 2000)
})

Promise.all([p1,p2]).then((results)=>console.log(results)) ////////////both should be resolve

Promise.race([p1,p2]).then((results)=>console.log(results)) /////////first one wins

Promise.any([p1,p2]).then((result)=>console.log(result))      /////first one wins if reject also

Promise.allSettled([p1, p2]).then((result) => console.log(result))    ///////show status of each

