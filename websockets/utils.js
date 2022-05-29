const _closeConnection = socket => {
    if (socket.readyState === WebSocket.OPEN){
        socket.close();
     }
}

const closeConnection = socket => socket.close(1000, "Deliberate Connection");