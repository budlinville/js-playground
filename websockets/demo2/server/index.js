const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

// ws => one singular connection (Could be many... e.g. every tab in every browser on every computer is a separate connection)
// wss => the single server hosting all of the connections

wss.on("connection", ws => {
    console.log("New client connected!");

    ws.on("message", ({ data }) => {
        data_str = data.toString();
        console.log(`Client has sent us: ${data_str}`);

        ws.send(data_str.toUpperCase());
    });

    ws.on("close", () => {
        console.log("Client has disonnected!");
    })
});