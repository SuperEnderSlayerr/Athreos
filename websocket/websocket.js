const WebSocket = require('ws');

const url = process.env.url || `ws://localhost:5000/`;
const socket = new WebSocket(url);

socket.on('open', () => {
	socket.send('Word?');
});
