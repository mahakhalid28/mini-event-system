import http from "http";
import { Server } from "socket.io";

import app from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";

const PORT = env.PORT;

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Listen for socket connections
io.on("connection", (socket) => {
  logger.info(`Client connected: ${socket.id}`);

  socket.emit("welcome", {
    message: "Welcome to Mini Event System!",
  });

  socket.on("hello-server", (data) => {
    logger.info("Message received from client:");
    console.log(data);

    socket.emit("server-reply", {
      message: `Hello ${data.name}!`,
    });
  });

  socket.on("join-room", (data) => {
    socket.join(data.room);

    logger.info(`${socket.id} joined room ${data.room}`);

    socket.emit("joined-room", {
      room: data.room,
      message: `Successfully joined ${data.room}`,
    });
  });

  socket.on("disconnect", () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });
});

// Start server
server.listen(PORT, () => {
  logger.info(` Server running on port ${PORT}`);
});