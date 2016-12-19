const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

// Fix the deprecation warning
mongoose.Promise = global.Promise;
// Connect the mongoose db
// Setting up the corrent development env
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}


// Any incoming post request assume that its json and parse it into an object
app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  console.log(err);
});

module.exports = app;
