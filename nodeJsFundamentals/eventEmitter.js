/*
Events: Event is an action that has happened in our app that we can respond to
events module returns a class called event emitter 
*/

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("event-trigger",()=>console.log("Event triggerd")); // Responding; on is used to add a callback function that's going to be executed when the event is triggered
emitter.on("event-trigger",()=>console.log("Event triggerd2")); 
console.log("Non blocking code");
emitter.emit("event-trigger"); //used to trigger an event

//also we can pass arguments to emit()
emitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
emitter.emit('start', 1, 100);
