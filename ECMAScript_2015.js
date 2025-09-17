//let name = "Ali";    // can be reassigned
//const PI = 3.14;     // cannot be reassigned
/* const add = (a, b) => a + b;
console.log(add(20,30));
const user = "Ibrahim";
console.log(`Hello, ${user}!`);
//Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet();
//Destructuring
const person = {name: "Sara", age: 22};
const {name, age} = person;
//Spread & Rest Operators
 const arr1 = [1,2];
 const arr2 = [...arr1,3,4];
 for(v of arr2){
    console.log(v);
 }
function sum(...nums) {       // rest
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(2,3)); */
 /* class person{
    constructor(name,age){
     this.name = name;
     this.age = age;
    }
     get_name(){
      console.log(`your name is ${this.name}, and your age is ${this.age}`);
    }
 }
 const obj = new person("ibrahim",27);
  obj.get_name(); */
  //Modules
  /* import {pi,saqure} from 'export.js';
    console.log(pi);
    console.log(saqure(4)); */
    //Promises
    const fetchData = () => 
        new Promise(resolve => setTimeout(() =>resolve("Done"),1000));
    
    fetchData().then(console.log);