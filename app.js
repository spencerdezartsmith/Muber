const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

// Fix the deprecation warning
mongoose.Promise = global.Promise;
// Connect the mongoose db
mongoose.connect('mongodb://localhost/muber');

// Any incoming post request assume that its json and parse it into an object
app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
