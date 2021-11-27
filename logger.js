const EventEmitter = require("events");
const uuid = require("uuid");

const fs = require('fs');
const path = require('path');


class Logger extends EventEmitter {
  log(msg) {

    //Call event
     // Create and append to file
fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Nodejs',function(err){
    if(err) throw err;
    console.log('file written to ...');
});
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message',data=> console.log('Call Listener',data));

logger.log('Hello');
