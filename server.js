const express = require("express");
const server = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const port = process.env.PORT || 3002;

requireDir("./src/models");
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json());
server.use(cors());
server.use(require("./src/routes"));
server.listen(port);
console.log("server is listening on port " + port);
