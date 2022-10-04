const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello its working !");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("joinRoom", room => {
          socket.join(room)
    })

    socket.on("newMessage", ({newMessage, room}) => {
      io.in(room).emit("getLatestMessage", newMessage)
    })

  });

const port = 4500 || process.env.PORT;
server.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
