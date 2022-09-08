const http = require('http')
const MyModule = require("./module");

const PORT = 5000;

const server = http.createServer(function(req, res) {
    const _myModule = new MyModule.MyModule("Tony", '2002-09-19');

    res.write(_myModule.getGreetingMessage());
    res.write(_myModule.getBirthdayMessage());
    res.end();
});

server.listen(PORT);

console.log(`Server listens to http://localhost:${PORT}`)