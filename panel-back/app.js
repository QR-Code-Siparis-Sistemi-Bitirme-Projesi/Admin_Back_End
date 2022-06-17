const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./load");
const cors = require("cors");

config();
loaders();

const app = express();

app.use(helmet());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "PUT", "DELETE", "UPDATE"],
    credentials: true,
  })
);

module.exports = app;
