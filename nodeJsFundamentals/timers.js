setTimeout(()=>{
    console.log("Printing after 5 seconds");
},5000
);  

const func =() =>{
    console.log("Printing after 10 seconds");
};
setTimeout(func,10000);

const name = x=>{
    console.log(x+'World');
};
setTimeout(name,2000,'Hello');

//challenge 1: define one function which prints two statements one after 6sec and one after 9 secs

const functionOne = argumnet=>{
    console.log(`Printing after ${argumnet} sec`);
};
setTimeout(functionOne,6000,6);
setTimeout(functionOne,9000,9);

//setInterval - executes in loop until you stop forcefully
setInterval(()=>{
    console.log("Priting after every 1 sec");
},1000);

//setImmediate- settimeout with 0 sec
setTimeout(()=>{
    console.log("printing after 0.5 sec");
},500);
for(let i=0;i<10;i++){
    console.log(`hellooo ${i}`);
}
//the above settimeout func executes after the for loop

//challenge 2
//print Hello Shagun every second and stop after 5 times
//after 5 times , print done and exit
//cannot use settimeout func

let count =0;
const interId = setInterval(() => {
    console.log("Hello shagun");
    count++;
    if(count==5){
        console.log("Done");
        clearInterval(interId);
    }
}, 1000);