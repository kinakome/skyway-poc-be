import { Server, Socket } from "socket.io";
import http from "http";

const server: http.Server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:1234",
  },
});

var port = 7073;
server.listen(port);

io.on("connection", (socket: Socket) => {
  // メッセージを受け取った時
  socket.on("message", (message) => {
    // 誰から送られたかわかるようにしておく
    message.from = socket.id;

    // 全員に送る
    io.emit("message", message);
  });
});
