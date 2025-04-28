
///////converts javascript object to json string

const user = { name: "Razi", age: 25 };
const jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"name":"Razi","age":25}'


//////////converts json to  javascript object 
const jsonStr1 = '{"name":"Razi","age":25}';
const user1 = JSON.parse(jsonStr);
console.log(user.name); // Razi

