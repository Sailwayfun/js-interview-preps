const express = require('express');
const { Server: ServerSocket } = require('ws');

const PORT = 9000;
const server = express()
    .listen(PORT,
        () => console.log(`[Server] Listening on PORT ${PORT}`));

const wss = new ServerSocket({ server });

//connection and disconnection
wss.on('connection', (ws, req) => {
    console.log('Client connected');
    ws.id = req.headers['sec-websocket-key'].slice(0, 8);
    ws.send(`Welcome Client ${ws.id}`);
    ws.on('message', message => {
        let clients = wss.clients;
        console.log(`[Server] Received: ${message}`);
        // 
        clients.forEach(client => {
            client.send(`[Server] To: ${ws.id} Message: ${message}`);
        });
    });

    ws.on('close', () => console.log('Client disconnected'));
});