'use strict'

//imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//instances
const app = express();
const router = express.Router();

//setting the port
const port = process.env.API_PORT || 8000;

//configure the API use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
//and look for JSON data in the request body
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing,
// we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing to get most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
