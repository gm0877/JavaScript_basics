
// let numbers=[1,2,3,4,51,6,8,76]
////adding
// numbers.push(98)

// numbers.pop()
// console.log(numbers)

////Accessing elements
// console.log(numbers[3])

////Iterating over elements by arrow function
// numbers.forEach((num)=>{
//     console.log(num)
// })

////Iterating over elements by anonymous function
// numbers.forEach(function(i){
//     console.log(i)
// })
// // Finding index of an element
// console.log(numbers.indexOf(51))

//Array with Objects
// let students=[
//     {"Name":"Mani","age":21,"acc":"hostel"},
//     {"Name":"saimani","age":22,"acc":"malligai hostel"},
//     {"Name":"Gudi saimanikanta","age":20,"acc":"thamarai hostel"}
// ]
// console.log(students[1]["Name"])
// console.log(students[2].Name)
// let st=students.map((i)=>{console.log(i.Name)})
// let stud=numbers.map((num)=>{ console.log( num*2)})
// let study=numbers.map(function(i){console.log(i**2)})


// let matrix=[
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]]
// console.log(matrix[2][3])

//Function Chaining
// const obj = {
//     value: 0,
//     increment() {
//       this.value+;
//       return this; // Return the object itself for chaining
//     },
//     double() {
//       this.value *= 2;
//       return this; // Return the object itself for chaining
//     }
//   };
  
//   obj.increment().double().increment(); // Calls increment, then double, then increment again
//   console.log(obj.value); // Output: 4
  
//Function Chaining: function with multiple arguments is converted into a sequence of functions, each taking only one argument
// function mul(a){
//     return function(b){
//         return a*b
//     }
// }
// let d=mul(8)
// console.log(d(7))


// (function(a,b){
//     return a+b
// })()
// let s=(7+6)
// console.log(s)

//immediate invoke functions
// ((c,d)=>{
//     console.log(c*d) 
// })(5,7)

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// let s=person.fullName.apply(person1, ["Oslo", "Norway"]);
// console.log(s)

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   let d=person.fullName.call(person1); 
//   console.log(d)




// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
//   let fullName = member.bind(member);
//   console.log(fullName)
  
  
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       console.log('Hi')
//     }
//   }
  
//   let display = person.display.bind(person);
//   display()
//   setTimeout(display, 3000);
    
//Map data structure
//   let n=[1,2,3,4,5,6]
//   let f=['apple','banana','mango']
//   let person= {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// let mymap=new Map()
// mymap.set('name','john')
// mymap.set('age',21)
// mymap.set('age',21) //duplicate elements will not be accepted
// console.log(mymap)
  
//sets
// let myset=new Set()
// myset.add(1)
// myset.add(2)
// myset.add(2) //duplicate elements will not be accepted
// console.log(myset)

  
  















