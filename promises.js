////promise

let myPromise=new Promise((resolve,reject)=>{
    let val=10
    if(val===10){
        resolve('its success ')
    }else{
        reject('its false')
    }
})
myPromise.then((res)=>console.log(res))
