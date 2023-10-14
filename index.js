const logEvents = require('./logEvents');

const EventEmitter = require( 'events');

class myEmmitter extends EventEmitter {};

// initialize objects
const myEmmitter = new MyEmmitter();

// add listener for log event
myEmmitter.on('log' , (msg) => logEvents(msg));

setTimeout(() => {
    // emit event 
    myEmmitter.EventEmitter( 'log', 'Log event emitted');
}, 2000);