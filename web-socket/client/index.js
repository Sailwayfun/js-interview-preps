const ws = new WebSocket('ws://localhost:9000');

function connect() {
    ws.onopen = () => console.log('[Client] Connected to server');
}

function disconnect() {
    ws.close();
    ws.onclose = () => console.log('[Client] Disconnected from server');
}

document.getElementById('connect').addEventListener('click', connect);
document.getElementById('disconnect').addEventListener('click', disconnect);