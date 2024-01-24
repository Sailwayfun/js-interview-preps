const express = require('express');
const { Server: ServerSocket } = require('ws');

const PORT = 9000;
const server = express()
    .listen(PORT,
        () => console.log(`[Server] Listening on PORT ${PORT}`));

const wss = new ServerSocket({ server });

//connection and disconnection
wss.on('connection', ws => {
    console.log('Client connected');
    ws.on('message', message => {
        console.log(`[Server] Received: ${message}`);
        ws.send(`ECHO: ${message}`);
    });

    ws.on('close', () => console.log('Client disconnected'));
});