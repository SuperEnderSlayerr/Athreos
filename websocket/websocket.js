const WebSocket = require('ws');

const url = process.env.url || `ws://localhost:5000/`;
const socket = new WebSocket(url);

// Create and connect a WebSocket client.
socket.on('open', () => {
	socket.send('WebSocket connection successful!');
});

// Listen for messages and log them.
socket.on('message', function message(data) {
	console.log(data);
});

module.exports = socket;
