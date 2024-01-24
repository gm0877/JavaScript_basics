// function outerfunction(){
//     let outervariable='this is an outer function'

//     function innerfunc(){
//         console.log(outervariable)
//     }
//     return innerfunc
// }
// let closure=outerfunction()
// closure()
// function createClosureArray() {
//     var closures = [];
  
//     for (let i = 0; i < 5; i++) {
//       function fun(j) {
//         closures.push(j**6);
//         };
//         fun(i);
//       }
  
//     return closures;
//   }
  
//   let sa=createClosureArray();

// function createClosureArray() {
//     const closures = [];
  
//     for (let i = 0; i < 5; i++) {
//       (function(j) {
//         closures.push(j){
//           console.log(j);
//         });
//       })(i);
//     }
  
//     return closures;
//   }
  
//   const closureArray = createClosureArray();
  
//   let s = createClosureArray();
//  console.log(s[0]())
// //arrow function
// const add = (a,b)=>{
//   console.log(a+b)
// }
// add(6,8)
////Template Literals:
// const name = 'John';
// const greeting = `Hello, ${name}`;
// console.log(greeting)
////Destructuring Assignment:
// Array destructuring
// const [first, second] = [1, 2];
// console.log(first,second)


// //Object destructuring
// const { name, age } = { name: 'John', age: 30 };
// console.log(name)

// Spread operator
//(...) it is spread operator
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];
// console.log(newArr)

// Rest operator

// function summing(...rese) {
//     return rese.reduce((acc, num) => acc - num, 18);
// }
// rese=[1,4,5]
// console.log(summing(...rese))


//Classes
// class person{
//   constructor(s_name,age,clg,phone_no){
//     this.st_naming=s_name
//     this.st_age=age
//     this.st_clgname=clg
//     this.st_phone_no=phone_no
//   }
//    sayhello(){
//     console.log(`Hello, my name is ${this.st_naming}`)
//   }

// }
// const p1=new person('sai',21,'SRMIST',7762)
// p1.sayhello()

// //Anonymous function
// (function(n){
//   console.log(`hello this is ${n} mani`)
// })
// ('sai')

//Promises
// const fetchdata=()=>{
//   return new Promise((resolve,reject)=>{
//     let s=true
//     if (s){
//       resolve('operation executed successfully')
//     }
//     else{
//       reject('operation failed')
//     }

//   })
// }
// fetchdata()
// function fet(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let q=false
//       if (q){
//         resolve('operation successful')
//       }
//       else{
//         reject('operation failed')
//       }
//     },1000);

//   });
// }
// async function a(){
//   try{
//     const result=await fet()
//     console.log(result)
//   }
//   catch (error){
//     console.error(error)

//   }
// }
// a()
// function fetch(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let a=false
//       if (a){
//         resolve('operation successful')
//       }
//       else{
//         reject('operation failed')
//       }
//     },3000)

//   })}
// async function func()
//   {
//     try{
//       const res=await fetch()
//       console.log(res)
//     }
//     catch(error){
//       console.error(error)
//     }

//   }
// func()


//Higher Order functions
//const numbers = [1, 2, 3];

// numbers.map((n) => n * 2) // it will return [2, 4, 6]
// numbers.filter((n) => n % 4) // it will filter out number that divides by 4
// numbers.reduce((...numbers) => a + b); // return 6 - sum of the array items

//IIFE-Immediately invoked function expression
// (function(){
//   console.log('IIFE IN JAVASCRIPT')
// })

//anonymous function
// setTimeout(function() {
//   console.log("Hello, world!");
// }, 1000);

//arrow function
//     setTimeout(()=>{
//     console.log("Hello, world!");
//     },3000)
//// Example array
const numbers = [1, 2, 3, 4, 5];

// Using forEach to iterate over the array
numbers.forEach(function (number) {
    console.log(number);
});

// Or using an arrow function for brevity
numbers.forEach(number => console.log(number));
