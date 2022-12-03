const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    name: "test 1",
    age: 20,
    desig: "hayyy test 1",
  },
  {
    name: "test 2",
    age: 20,
    desig: "hayyy test 1",
  },
  {
    name: "test 3",
    age: 20,
    desig: "hayyy test 1",
  },
];

app.get("/", (req, res) => res.send("Hello World! /api/data"));
app.get("/api/data", (req, res) => res.send(data));
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`)
);
