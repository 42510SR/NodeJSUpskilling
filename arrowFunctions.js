/*An arrow function is a compact way to a function expression.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button etc.
With arrow functions the this keyword always represents the object that defined the arrow function.

Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.
Arrow functions cannot use yield within their body and cannot be created as generator functions.*/

//Example 1

var number = [1,2,3,4];
var sum = 0;
number.forEach(n=>sum+=n);
console.log(sum==10);//true

var doubled = number.map(n=>n*2);
var result = [2,4,6,8];
console.log(JSON.stringify(doubled) === JSON.stringify(result));

// Regular Function:
// hello = function() {
//     document.getElementById("demo").innerHTML += this;
//   }
  
//   // The window object calls the function:
//   window.addEventListener("load", hello);
  
//   // A button object calls the function:
//   document.getElementById("btn").addEventListener("click", hello);

//With Arrow function use of this :
const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach((number) => {
        console.log(this.phrase, number)
      })
    },
  }
  
  printNumbers.loop()
 // Output:
//  The current value is: 1
//  The current value is: 2
//  The current value is: 3
//  The current value is: 4

//With regular function
const printNumbersRegular = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach(function (number) {
        console.log(this.phrase, number)
      })
    },
  }
printNumbersRegular.loop(); 
//output:    undefined 1
        //   undefined 2
        //   undefined 3
        //   undefined 4

//Arrow Functions Have No constructor or prototype

//Arrow Function
const myArrowFunction = () => {};
console.log(myArrowFunction.prototype); //output : undefined 
const arrowInstance = new myArrowFunction();
console.log(arrowInstance); //output : Uncaught TypeError: myArrowFunction is not a constructor

//Regular Function
function myFunction() {
    this.value = 5;
  }
console.log(myFunction.prototype); //output : {constructor: ƒ}
const instance = new myFunction();
console.log(instance.value); //5