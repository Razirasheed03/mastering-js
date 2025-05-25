setTimeout(() => {
    console.log("2000ms")
}, 2000);

setTimeout(() => {
    console.log("100ms")
}, 100);

console.log("End of script")


/////////settimeouts move to the webapi section and then task queue so the end of script works first
//////////after that it prints the both timeout consoles