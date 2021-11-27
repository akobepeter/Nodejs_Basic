const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());


// memory difference
const totalMem = os.totalmem();

const freeMem = os.freemem();

const diff = totalMem - freeMem;
console.log(diff);

// Home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());
