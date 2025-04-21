////promise

let myPromise=new Promise((resolve,reject)=>{
    let val=10
    if(val===10){
        resolve('its success ')
    }else{
        reject('its false')
    }
})
// myPromise.then((res)=>console.log(res))

////promise.all
let promise1=new Promise((resolve)=>setTimeout(resolve,2000,'first'))
let promise2=new Promise((resolve)=>setTimeout(resolve,3000,'second'))

promise1.then((res)=>console.log(res))
// Promise.all([promise1, promise2])
//   .then((results) => console.log(results)) // ["First", "Second"]
//   .catch((error) => console.log(error));
