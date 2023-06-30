//let example
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);//2
}
console.log(x);//1

// var exapmle
var y = 1;
if (y === 1) {
  var y = 2;
  console.log(y);//2
}
console.log(y);//2

//strict mode example 1
"use strict"
function sum(a,b){
    add = a+b;
    console.log(add); // error comes as add is not defined; if we dont  write "use strict" then no error displays and output is generated
}
sum(10,10);
// strict mode example 2
"use strict"
function sum(a,a){
    add = a+20;
    console.log(add); // error comes as duplicate paramater not allowed in the context; if we dont  write "use strict" then no error displays and output is generated
}
sum(10,10);

//add events 
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
  // after clicking on the webpage this shows an alert msg .

  //Scope with const/let keyword
  if (Math.random() > 0.5) {
    const y = 5;
  }
  console.log(y); // refernce error , y is not defined

// Scope with var keyword
  if (true) {
    var z = 5;
  }
  console.log(z); // x is 5

  //Difference between var and let 
  function varTest() {
    var x = 1;
    {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
}

//Temporal dead zone of let and const keywords
{
    // TDZ starts at beginning of scope
    console.log(a); // undefined
    console.log(b); // ReferenceError
    var a = 1;
    let b = 2;
  }

  {
    // TDZ starts at beginning of scope
    const func = () => console.log(letVar); // OK
  
    // Within the TDZ letVar access throws `ReferenceError`
  
    let letVar = 3; // End of TDZ (for letVar)
    func(); // Called outside TDZ!
  }

  console.log(typeof i);//reference error
  let i = 10;

  //Array Literals
  const f = ["Shagun", , "Riya"];
  console.log(f); //['Shagun', empty, 'Riya']

//Boolean literals
//Creating Boolean objects with an initial value of false
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);

//Creating Boolean objects with an initial value of true
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});

//Destructuring
let d=2;
let e=3;
[d,e]=[e,d]; //swapping thru destructuring , this line can be written as let [d,e]=[2,3]
console.log(d); //3
console.log(e); //2

//can destruct arrays
var destructArray = function(){
    return [1,2,3];
};

let [v1,v2]= destructArray();
console.log(v1,v2); //1,2

//Rest Parameters --last parameter in a function ...
    let sum= function(name, ...num){
        let result = 0;
        num.forEach(function(n){
            result +=n;
        });
        return result;
    };
    let result = sum("Shagun", 1,2,3); // If we dont pass 1,2,3 here , then result will be 0
    console.log(result);
    
//Example 2 fro rest parameter
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing four arguments to its parameters:
console.log(myBio("Shagun", "Rai", "Developer", "Female"));
  
  // The invocation above will return:["Developer", "Female"]

//Spread operator spreads an array across parameters

let spreadUse = function(x,y,z){
    return x+y+z;
}
var res = spreadUse(...[1,2,3]);
console.log(res);

// Also it can build arrays

var s=[4,5,6];
var t = [1,2,3,...a,7,6,8];
console.log(t); //[1,2,3,4,5,6,7,6,8]
