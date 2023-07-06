// The Promise object represents the completion (or failure) of an asynchronous operation and its resulting value.

let promise = new Promise(function(resolve, reject){
    //code ....
});

const count = 1;

let countCheck = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countCheck); //Promise { 'There is a count value.' }

// then() method is used with the callback when the promise is successfully fulfilled or resolved.

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });

  
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });

    let countValueReject = new Promise(function (resolve, reject) {
        resolve("Promise rejected");
      });
      
// executes when promise is resolved successfully
      countValueReject
        .then(function successValue(result) {
          console.log(result);
        })
        //catches when rejected
        .catch(
        function errorValue(result) {
            console.log(result);
        }
    ) ;


//callback function are also used to handle these scenarios but promises makes easier syntax and managed easily


// api().then(function(result) {
//     return api2() ;
// }).then(function(result2) {
//     return api3();
// }).then(function(result3) {
//     // do some work
// }).catch(function(error) {
//     //handle any error that may occur before this point 
// });

// //using same with callbacks
// api(function(result){
//     api2(function(result2){
//         api3(function(result3){
//              // do work
//             if(error) {
//                 // do something
//             }
//             else {
//                 // do something
//             }
//         });
//     });
// });

//some methods

// all(iterable)	Waits for all promises to be resolved or any one to be rejected

//this is the scenario where if one promsie is rejected then promise .all method rejects and does not fulfills the resolved ones

const r1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("first"), 100);
  });
  const r2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("second"), 200);
  });
  const r3 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
  });
  Promise.all([r1, r2, r3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    });

//Example 1
const p1 = Promise.resolve(3);
const p2 = 1100;
const p3 = new Promise((resolve, reject) => {
    resolve("sometext");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1100, "sometext"]
});

//Example 2
// All values are non-promises, so the returned promise gets fulfilled
const v = Promise.all([1, 2, 3]);
const vCopy = new Promise((resolve,reject)=>{
    resolve("HEllo from copy");
    console.log("Promise Copy v");
});
// The only input promise is already fulfilled,so the returned promise gets fulfilled
const v1 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One input promise is rejected,so the returned promise gets rejected
const v2 = Promise.all([1, 2, 3, Promise.reject(555).catch(()=>{
    console.log("Promise Rejected");
    })]);
setTimeout(() => {
    console.log(v);
    console.log(v1);
    console.log(v2);
});

//-------------------------Output-------------------------------
/*
Promise { 'There is a count value.' }
Promise Copy v
Promise resolved
Promise rejected
Promise Rejected
You can call multiple functions this way.
[ 3, 1100, 'sometext' ]
reject
Promise { [ 1, 2, 3 ] }
Promise { [ 1, 2, 3, 444 ] }
Promise { [ 1, 2, 3, undefined ] }
*/

// allSettled(iterable)	Waits until all promises are either resolved or rejected

//Example :
Promise.allSettled([
  Promise.resolve(1),
  new Promise((resolve) => setTimeout(() => resolve(2), 0)),
  99,
  Promise.reject(new Error("error")),
]).then((values) => console.log(values));

//--------------Output----------------
/*
[
    { status: 'fulfilled', value: 1 },
    { status: 'fulfilled', value: 2 },
    { status: 'fulfilled', value: 99 },
    {
      status: 'rejected',
      reason: Error: error
          at file:///C:/NodeJSUpskilling/Promises.js:155:18
          at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
          at async Promise.all (index 0)
          at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
          at async loadESM (node:internal/process/esm_loader:91:5)
          at async handleMainPromise (node:internal/modules/run_main:65:12)
    }
  ]
*/

//----------------------------------------------Difference btw all() and allSettled()----------------------------------------------

/*
Promise.all will reject as soon as one of the Promises in the array rejects.
Promise.allSettled will never reject - it will resolve once all Promises in the array have either settled (rejected or resolved).
*/

const diff = Promise.all([Promise.resolve(1999), Promise.resolve(2999)]).then(setTimeout(() => {
    console.log("Diff",diff);
}, 0));

//Output: Diff Promise { [ 1999, 2999 ] }

const diff2 = Promise.allSettled([Promise.resolve(899999), Promise.resolve(99999)]).then(setTimeout(() => {
    console.log("Diff2",diff2);
}, 0));
//Output : 
/*
Diff2 Promise {
    [
      { status: 'fulfilled', value: 899999 },
      { status: 'fulfilled', value: 99999 }
    ]
  }
  */
// any(iterable)	Returns the promise value as soon as any one of the promises is fulfilled

const pr1= new Promise((resolve,reject)=>{
    resolve(20);
});
const pr2= new Promise((resolve,reject)=>{
    resolve(10);
});
const pr3= Promise.reject(1000);
const promisess= [pr1,pr2,pr3];
const anyPromise = Promise.any(promisess).then((value)=>{
    console.log("Any Promise example:",value);
});