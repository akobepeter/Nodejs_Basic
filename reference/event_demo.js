
const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter{}

//Init Object
const myEmitter = new MyEmitter();


// Event Listener
myEmitter.on('event',function() {
    console.log('Event Fired!');
});


//Init event
myEmitter.emit('event'); 




