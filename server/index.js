const express = require('express');
const db = require('../database/index.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.post('/api/calendar', function (req, res) {
});

app.get('/api/calendar', function (req, res) {
  db.save();
  db.get('123', (err, result)=> res.status(200).send(result));
  console.log('been invoked');
});

let port = 3003;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});