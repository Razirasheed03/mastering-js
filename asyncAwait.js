async function fetchData() {
    let res = await fetch("http://numbersapi.com/1")
    let data = await res.json()
    console.log(data, 'rec')
}

///////async always return a promise