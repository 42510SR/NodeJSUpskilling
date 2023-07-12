const fs = require("fs");
 /*
    Event Loop: What node uses to process asynchronous actions and interface them for you so that you dont have to deal with threads.
    Monitor async operations when to be consumed

    Code execution in Node js:
    v8 engine consists of memory heap and call stack.
    Memory is allocated in memory heap when we declare any variables etc. and when executed it is in call stack and when func returns then popped out from stack.
    when any async method then pushed to libuv
*/
//Microtask queue
// Example 1: nextTick Queue: 
process.nextTick(()=>{
    console.log("This process is in nextTick queue");
})

//Example 2: 

console.log("First console log");
process.nextTick(()=>console.log("This is first process.nextTick"));
console.log("Second console log")
 
//Output
/*
    First console log
    Second console log
    This is first process.nextTick
*/

//Example 3: Promise queue
Promise.resolve().then(()=>{
    console.log("This is in Promise queue");
}) 

//Example Excersise 4:

process.nextTick(()=>console.log("first next tick"));
process.nextTick(()=>{
    console.log("Second next tick");
    process.nextTick(()=>console.log("inner next tick"));
});
process.nextTick(()=>console.log("Third next tick"));

Promise.resolve().then(()=>console.log("First Promise"));
Promise.resolve().then(()=>{
    console.log("Second Promise");
    process.nextTick(()=>console.log("Inner next tick inside Promise"));
});
Promise.resolve().then(()=>console.log("Third Promise"));

//Output:
/*
first next tick
Second next tick
Third next tick
inner next tick
First Promise
Second Promise
Third Promise
Inner next tick inside Promise
*/

//Callbacks in microtasks queues executed before timer queues. 

//Timer queues are executed in FIFO Order.
//Example 5
setTimeout(() => {
   console.log("First Timeout");
}, 0);
setTimeout(() => {
    console.log("Second Timeout");
 }, 0);
 setTimeout(() => {
    console.log("Third Timeout");
 }, 0);
process.nextTick(()=>console.log("first next tick"));
process.nextTick(()=>{
    console.log("Second next tick");
    process.nextTick(()=>console.log("inner next tick"));
});
process.nextTick(()=>console.log("Third next tick"));

Promise.resolve().then(()=>console.log("First Promise"));
Promise.resolve().then(()=>{
    console.log("Second Promise");
    process.nextTick(()=>console.log("Inner next tick inside Promise"));
});
Promise.resolve().then(()=>console.log("Third Promise"));

//Output:
/*
    first next tick
    Second next tick
    Third next tick
    inner next tick
    First Promise
    Second Promise
    Third Promise
    Inner next tick inside Promise
    First Timeout
    Second Timeout
    Third Timeout
*/

// I/O queues
//Callbacks in microtasks queues are exceuted before I/O queues
//Example 6
fs.readFile(__filename,()=>{
    console.log("This is i/o queue");
});

process.nextTick(()=>console.log("This is next tick queue"));
Promise.resolve().then(()=>console.log("This is Promise queue"));

//Output:
/*
    This is next tick queue
    This is Promise queue
    This is i/o queue
*/

//Example 7

setTimeout(() => {
    console.log("This is settimeout");
}, 0);

fs.readFile(__filename,()=>{
    console.log("This is I/O");
});

//Output : Here output is uncertain sometimes settimeout is printed before i/o and sometimes after

//Example 8
//IO queue callbacks are executed after microtasks queues and timer queue callbacks
fs.readFile(__filename,()=>console.log("This is readfile io"));

process.nextTick(()=>console.log("this is next tick"));
Promise.resolve().then(()=>console.log("PRomise queue"));
setTimeout(() => {
    console.log("Settimeoute function queue");
}, 0);

for(let i =0;i<1000000;i++){} //this for loop is for settiemout so that uncertainity should not come and any process if cpu is bsy 

//Output
/*
this is next tick
PRomise queue
Settimeoute function queue
This is readfile io
*/

 //Example 9:
 //IO events are polled and callback functions are added to IO queue only after the IO is completed.

 fs.readFile(__filename,()=>console.log("This is readfile io"));

 process.nextTick(()=>console.log("this is next tick"));
 Promise.resolve().then(()=>console.log("PRomise queue"));
 setTimeout(() => {
     console.log("Settimeoute function queue");
 }, 0);
 setImmediate(()=>console.log("Set immediate queue"));
 
 for(let i =0;i<1000000;i++){} //this for loop is for settiemout so that uncertainity should not come and any process if cpu is bsy 
 
 //Output
 /*
    this is next tick
    PRomise queue
    Settimeoute function queue
    Set immediate queue
    This is readfile io
 */