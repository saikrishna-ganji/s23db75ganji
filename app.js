var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buds = require('./routes/earphones');
var boardRoute = require('./routes/board');
var selectRoute=require('./routes/selector')
var earphones = require("./models/earphones");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/earphones', buds);
app.use('/board',boardRoute);
app.use('/selector',selectRoute);
app.use('/resource', resourceRouter);

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed onserver start
async function recreateDB(){
// Delete everything
await Costume.deleteMany();
let instance1 = new
Costume({costume_type:"ghost", size:'large',
cost:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
}

// We can seed the collection if needed on server start

async function recreateDB(){
  // Delete everything
  await earphones.deleteMany();
  let instance1 = new 
  earphones({earphone_name:"sony",earphone_shape:"single flange ear tip",earphone_radius:4});
  await instance1.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("First object saved")
  //});
 
  let instance2 = new 
  earphones({earphone_name:"boat",earphone_shape:"In ear",earphone_radius:3});
  await instance2.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("second object saved")
  //});
 
  let instance3 = new 
  earphones({earphone_name:"jbl",earphone_shape:"half in ear",earphone_radius:5});
  await instance3.save();
  //instance1.save( function(err,doc) {
  //if(err) return consol…
  console.log("Third object saved")
  //});
 }
 let reseed = false;
 if (reseed) { recreateDB();}
 
 module.exports = app;

