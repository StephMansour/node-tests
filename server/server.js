const express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page Not Found',
    name: 'Todo App V.1'
  });
});

// GET /users
// Giveusers a name prop and age prop
app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Steve',
    age: 32
  }, {
    name: 'Bob',
    age: 30
  }, {
    name: 'Luke',
    age: 32
  }])
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


module.exports.app = app;
