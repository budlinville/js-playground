const http = require('http');
const WebSocketServer = require('websocket').server;
let connection = null;


const httpServer = http.createServer((req, res) => {
    console.log('We have received a request');
});


const websocket = new WebSocketServer({
    'httpServer': httpServer
})


websocket.on('request', request => {
    connection = request.accept(null, request.origin);
    connection.on('onopen', () => console.log('Connection opened!'));
    connection.on('onclose', () => console.log('Connection closed!'));
    connection.on('onmessage', message => {
        console.log(`Received message ${message}`);
    });
});


httpServer.listen(8080, () => console.log('My server is listening on port 8080'));