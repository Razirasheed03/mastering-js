function printNum(start,end){
    if(start>end) return 
    console.log(start)
    printNum(start+1,end)
}
printNum(1,10)