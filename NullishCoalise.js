const name = null;
const userName = name ?? "Guest";
console.log(userName); // Guest

const count = 0;
console.log(count ?? 10); // 0 (not 10)


/////////only give right value if it was null or undefined