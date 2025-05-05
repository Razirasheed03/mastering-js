const sumOfNestedObject=(obj)=>{
    let sum=0
        for(let key in obj){
            if(typeof obj[key]==='number'){
                sum+=obj[key]
            }else if(typeof obj[key]==='object'){
                sum+=sumOfNestedObject(obj[key])
            }
        }
        return sum
    }
    
    let obj={
        a:10,
        b:20,
        c:{
            c1:10,
            c2:20,
            c3:{
                c4:10
            }
        }
    }
    console.log(sumOfNestedObject(obj))