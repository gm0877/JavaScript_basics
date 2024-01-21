//----------------------Synchronous---------------
//ex1
// console.log('hii')
// function Synchronous(){
//     console.log('good mrng')
// }
// Sunchronous()
// //ex2
// console.log('start')
// for(let i=0;i<=3;i++){
//     console.log('step'+i)
// }
// console.log('end')
// //ex3
// console.log('start function')
// const x=()=>{
//     console.log('2nd step')
// }
// x()
// console.log('function end')
//---------------------------Asynch---------
//--ex1---
// console.log('hi')
// function asynch(){
//     setTimeout(()=>{
//     console.log('manikanta')
// },2000)
// }
// console.log('how r u bro')
// asynch()
// let c=()=>{
//     setTimeout(()=>{
//         console.log('this is set time out')
//     },2000)
// }
// c()

// //Example 2
// console.log("Staring...");
// function fun3(){
//     console.log("Waiting in 3rd function");
// }
// function fun2(){
//     setTimeout(()=>{
//         console.log("Statement 3");
//     },2000);
//     fun3();
// }
// function  fun() {
//     console.log("Statement 1");
//     setTimeout(()=>{
//         console.log("Continue 2nd function because more waiting time in 3rd function")
//         console.log("Statement 2");
//     },0);
//     fun2();
// }
// fun();
// // Example 2
// console.log("Starting");
// function fun1(){
//     console.log("Transferred data successfully...")
// }
// function fun(){
//     console.log("Waiting for the response....");
//     setTimeout(()=>{
//         console.log("End")
//     },2000);
//     fun1();
// }

//-----------------------callback--------------------
// example1
let test1 = (a)=>{
    console.log("a---->",a);
    a();
};
let test2 = ()=>{
    
    console.log("Hello");
};
test1(test2);
// //Example 2:
// function func(name,callback){
//     console.log('hello '+name)
//     callback()
// }
// function fun1(){
//     console.log("Goodbye!...");
// }
//func('mani',fun1)
 // //example 3
//  function func(name,callback){
//     console.log('hello, '+name)
//     setTimeout(function(){
//         callback()
//  },10000)
//     }
// function func1(){
//     console.log('It will run after 10 seconds')
// }
// func('sai',func1)
 
//----------Promise---------
//Example1
// let newpromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let success = false;
//         if(success){
//             resolve("Operation Successful");
//         }else{
//             reject("Operation Failed");
//         }
//     },2000);
// });
// newpromise
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.error(error);
//     });
// let a=new Promise()

// // Example 2:
// let a=1;
// let newpromise = new Promise((resolve, reject)=>{
//     if(a>=5){
//         resolve(a);
//     }else{
//         reject(a);
//     }
// });
// newpromise
//     .then((s)=> console.log("Login Success with number:",val))
//     .catch((s)=> console.log("Login Failed with number:",val));
    
// let a=10;
// let b=10;
// console.log(a+b);


// let a=10;
// let b=14;
// function fun(a,b){
//     return a*b;
// }
// console.log(fun(a,b));

//-------------aync and await--------
// //Example
// async function fun(){
//     let promise = new Promise((resolve, reject)=>{
//         setTimeout(()=> resolve("Done"),1000);
//     });
//     let result = await promise;
//     console.log(result);
// }
// fun();
let a=1;
function tmp(){
    a=10;
    console.log(a);
    {
        a=18;
        console.log(a);
    }
}
console.log(a);
tmp();

