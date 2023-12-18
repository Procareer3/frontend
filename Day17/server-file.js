let http = require('http');
let url = require('url');
let fs = require('fs');
//get files and serve
let myserver = http.createServer((request,response) => {
    
    //get file name
    let filename = url.parse(request.url).pathname;
    console.log('File:', filename)
    //read the file
    switch(filename){
        case '/':
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write('Welcome')
            response.end();
            break;
        case '/index.html':
            fs.readFile(__dirname+filename, (error, data) => {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
            });
            break;
        default:
            response.writeHead(200,{'Content-Type':'text/plain'});
            response.write('Reached to the end');
            response.end();
    }
});

myserver.listen(3000, () => console.log('Listening at PORT 3000'));