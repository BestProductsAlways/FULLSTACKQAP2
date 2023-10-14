const { format} = require('date-fns');

console.log(new Date(), 'yyyyMMdd\tHH:mm:ss');
const { v4: uuid } = require('uuid');

console.log(uuid())


const logEvents = require('./logEvents');

const EventEmitter = require( 'events');

class myEmitter extends EventEmitter {};

// initialize objects
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on('log' , (msg) => logEvents(msg));

setTimeout(() => {
    // emit event 
    myEmitter.EventEmitter( 'log', 'Log event emitted');
}, 2000);