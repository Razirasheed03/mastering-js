function first(callback){
    setTimeout(()=>{
        console.log('first')
        callback()
    },1000)
}
function second(callback){
    setTimeout(()=>{
        console.log('second')
        callback()
    },2000)
}


first(()=>{
    second(()=>{
        console.log('task completed')
    })
})