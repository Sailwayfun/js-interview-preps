function createClient() {
    let ws;
    function connect() {
        ws = new WebSocket('ws://localhost:9000');
        ws.onopen = () => {
            console.log('[Client] Connected to server');
        };
        ws.onmessage = event => {
            console.log(`[Client] Received: ${event.data}`);
            document.getElementById('server-msg').textContent = event.data;
        };
    }

    function disconnect() {
        ws.close();
        ws.onclose = () => {
            console.log('[Client] Disconnected from server');
        };
    }

    function sendMessageToServer() {
        const message = document.getElementById('message').value;
        if (ws) {
            ws.send(message);
            return;
        }
        console.log('[Client] Not connected to server');
    }

    return {
        connect,
        disconnect,
        sendMessageToServer
    };
}
const { connect, disconnect, sendMessageToServer } = createClient();

document.getElementById('connect').addEventListener('click', connect);
document.getElementById('disconnect').addEventListener('click', disconnect);
document.getElementById('send').addEventListener('click', sendMessageToServer);

