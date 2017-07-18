'use strict';

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var appRoutes = require('./routes/index');
var edgesRoutes = require('./routes/edges');
var nodesRoutes = require('./routes/nodes');

var app = express();

var config = require('./config');
var mongoose = require('mongoose');
var db = mongoose.connection;
var connectionString = config.mongodb


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/my-dream-app/home/network', nodesRoutes);
app.use('/my-dream-app/home/network', edgesRoutes);
app.use('/', appRoutes);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    /*var err = new Error('Not Found');
    err.status = 404;
    next(err);*/
    return res.render('index');
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

mongoose.connect(connectionString);

mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

  //var API_relations      = require('./apis/relations.api');

  //app.get('/api/connections',            API_relations.getRelations);
  //app.get('/api/connections/:userid'  ,  API_relations.getRelationsUser);


  // all other routes are handled by Angular
  //app.get('/*', function(req, res) {
  //  res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  //})


//app.listen( PORT , () => console.log(`listening on http://localhost:${PORT} + ${connectionString}` ) )


})
///////////////////////////////////////////////////////////////////////


module.exports = app;
