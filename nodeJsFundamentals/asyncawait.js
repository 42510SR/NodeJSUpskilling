const awaitFunction = (argument)=>{
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(argument)
        }, 1000);
    });
};
async function asyncFunction (){
    const data = await awaitFunction("Async await example");
    console.log(data);
}
asyncFunction();

//example and compariosn to normal function without async use

async function xyz(){
    console.log("Async function use");
}

function xyz1() {
    console.log(Promise.resolve("Normal function use"));
}
xyz();
xyz1();

//output
// Async function use
// Promise { 'Normal function use' }