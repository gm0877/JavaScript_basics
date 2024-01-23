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

function createClosureArray() {
    const closures = [];
  
    for (let i = 0; i < 5; i++) {
      (function(j) {
        closures.push(function() {
          console.log(j);
        });
      })(i);
    }
  
    return closures;
  }
  
  const closureArray = createClosureArray();
  
  let s = createClosureArray();
 console.log(s[0]())
  