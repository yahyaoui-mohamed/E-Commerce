const express = require("express");
const app = express();
const cors = require('cors')
const port = 5000;
app.get("/", cors(), function (req, res) {
  res.json([{
    name: "Mohamed",
    age: 22
  },
  {
    name: "Ahmed",
    age: 20
  }
  ])
});

app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});