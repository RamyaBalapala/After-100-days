const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  const result = addDays(new Date(date), 100);

  response.send(result);
});

app.listen(3000);

module.exports = app;
