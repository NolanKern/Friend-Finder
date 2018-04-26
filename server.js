// requires for the functionality to be called when the address is changes
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// dictating what logic app can use
app.user(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// specifies root for static variables
app.use(express.static("app"));

// direction locig for routing js files
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

// listen for local host
app.listen(process.env.PORT || 9001);