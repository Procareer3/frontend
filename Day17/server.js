//get library
//create server
//create proper response header to the request
//end response
//listen at port

let http = require('http');
let myserver = http.createServer((request,response) => {
    response.writeHead(200,'Content-Type: text/plain');
    response.write('This is a message from server')
    response.end()
});

myserver.listen(3000, () => console.log('Listening at PORT 3000'));