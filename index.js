const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const routerTodo = require("./routes/todoRouter");
const port = 8080

const app = express();

const db = require("./config/db");
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(cors());

app.use(morgan("common"));

app.use("/api/todolist", routerTodo);

app.listen(port, () => {
  console.log("============= port", port);
});

