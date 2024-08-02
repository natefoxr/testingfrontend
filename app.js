const sendButton = document.getElementById('sendButton');
        
sendButton.addEventListener('click', () => {
    // Create a WebSocket connection to the server
    const socket = new WebSocket('ws://localhost:8080'); // Ensure your server is running at this address

    socket.onopen = () => {
        console.log('Connection established.');
        // Send the text 'supergong' over the WebSocket
        socket.send('supergong');
        console.log("Message sent: 'supergong'");
    };

    socket.onmessage = (event) => {
        console.log('Message received from server: ', event.data);
    };

    socket.onerror = (error) => {
        console.log('WebSocket error: ', error);
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed.');
    };
});
