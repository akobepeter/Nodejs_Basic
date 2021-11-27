const http = require('http');

// create server object
http.createServer(function(req,res) {
    
    //write a response
    res.write('Welcome');
    //end a response
    res.end();

}).listen(5000,()=>console.log('Server is running'));