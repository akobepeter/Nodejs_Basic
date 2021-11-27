const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err) throw err;
//     console.log('Folder created');
// });

// Create and write file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',function(err){
//     if (err) throw err;
//     console.log('file written to ....');
    
// // Create and append to file
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Nodejs',function(err){
//     if(err) throw err;
//     console.log('file written to ...');
// });

// });


//Read File
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err,data) {
//     if(err) throw err;
//     console.log(data);
// });


// Rename File
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','welcome.txt'),function(err) {
    if(err) throw err;
    console.log('file renamed');
});


