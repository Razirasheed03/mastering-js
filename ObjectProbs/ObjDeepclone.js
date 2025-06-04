function deepClone(obj){
    if(typeof obj!=='object') return obj
    let clone={}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key]=deepClone(obj[key])
        }
    }
    return clone
}
