var express = require('express');
var bodyParser = require('body-parser');
var dao = require("./data_access");

var app = express();

app.use(bodyParser.json()); //Parse JSON body

app.get("/books/:isbn", function(req, res) {
  var book = dao.findBook(req.params.isbn);

  if (book === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(book);
  }
});

app.put("/books/:isbn", function(req, res) {
  if (req.params.isbn === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();

    return;
  }

  dao.updateBook(req.params.isbn, req.body);
  res.end();
});

app.listen(3000);