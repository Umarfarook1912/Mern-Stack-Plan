// let userProfile = {
//     name: "umar",
//     age: 25,
//     email: "LH5yZ@example.com",
//     address: {
//         street: "123 Main St",
//         city: "Karachi",
//         country: "Pakistan"
//     },
//     eat: function () {
//         // return "I am eating";
//         console.log("i am eating");
//     }
// }
// console.log(userProfile);
// console.log(userProfile.name);
// console.log(userProfile["email"]);
// console.log(userProfile.address.city);
// // let eatting=userProfile.eat();
// // console.log(eatting);
// userProfile.eat();

// let vehicle={
//     "vehicleType":"car",
//     "brand":"Toyota",
//     "model":"Camry",
//     "seaterType":["2-seater","4-seater","6-seater"],
// }
// console.log(vehicle["seaterType"][0]);



//destructuring - to extract values from objects and arrays( only needed values)
// const fakeApi="https://jsonplaceholder.typicode.com/todos"
// const {title,completed}=fakeApi
// console.log(title) ;
// console.log(completed) ;


//set remove duplicates
// const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9];
// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers);
// uniqueNumbers.add(10)
// console.log(uniqueNumbers);


// const map = new Map();

// map.set("name", "Dharani");
// map.set("age", 20);

// console.log(map.get("name"));
// console.log(uniqueNumbers);
// uniqueNumbers.delete(5);

// json to object and viceversa
// const person={
//     name:"umar",
//     age:25,
//     email:"umar@gmail.com",
// }
// console.log(person);
// let json=JSON.stringify(person);
// console.log(json);
// let parsedObject=JSON.parse(json);
// console.log(parsedObject);



//template literal
const name="Dharani"
// console.log("Hello" +name+ "Welcome to our course");
console.log(`Hello ${name} Welcome to our course`)


//split
const data = "apple/banana,mango";

console.log(data.split("/"));

//join
const data1 = ["apple", "banana", "mango"];
console.log(data1.join("-"));
const name1 = "   Dharani   ";

console.log(name1);
console.log(name1.trim());
const now = new Date();

console.log(now);
console.log(now.getFullYear()); // 2026
console.log(now.getMonth()+1);    // 0–11
console.log(now.getDate());     // day
console.log(now.getHours());
console.log(now.getMinutes());