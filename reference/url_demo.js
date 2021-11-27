const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host(root domain)
console.log(myUrl.host); 

// Hostname(does not get port number)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);


// Serialized Query
console.log(myUrl.search);

// Params Obj
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// Loop through param
myUrl.searchParams.forEach(function(name,value) {
    console.log(`${name}: ${value}`);
});