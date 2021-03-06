/** ---------- THIRD PARTY MODULES ---------- **/
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/** ---------- OUR MODULES ---------- **/
var heroes = require('./routes/heroes');
var index = require('./routes/index');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/heroes', heroes);
app.use('/', index);

/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var databaseUri = 'mongodb://localhost:27017';
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri)
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error:', err);
})

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});
