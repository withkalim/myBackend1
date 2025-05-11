import express from "express";
import Allrouter from "./routes/index.js";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import { Server } from "socket.io";
// import http from "http";


const forExpress = express();

// const server = http.createServer(forExpress);
// const io = new Server(server, {
//   cors:{
//     // origin: "https://awdiz-10-react.vercel.app",
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket)=>{
//   console.log("socket Server connected", socket.id);
//   socket.on("Send_message", (data)=>{
//     console.log("Message received", data);

//     io.emit("receive_message", {data});
//   });
//   socket.on("Disconnect", ()=>{
//     console.log("User Disconnected");
//   })
// });


forExpress.use(express.json());
forExpress.use(morgan("combined"));
dotenv.config();
forExpress.use(cors());

forExpress.get("/", (req, res) => {
  res.send("Welcome to backend");
});
forExpress.get("/book", (req, res) => {
  res.send("Read my books");
});
forExpress.get("/cars", (req, res) => {
  res.send("Welcome to cars universe");
});
forExpress.get("/products", (req, res) => {
  res.send("all products");
});

forExpress.use("/api/v1", Allrouter);

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("mongoDB Connected");
  })
  .catch((error) => console.log("MongoDB connection error:", error));

// forExpress.listen(8000, () =>
//   console.log("Server is running on port number 8000")
// );
forExpress.listen(8000, () =>
  console.log("Server is running on port number 8000")
);