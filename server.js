const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

const PORT = 3000 || process.env.PORT;
const app = express();


//handlebars
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
//middleware
require('./routing/routing')(app);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
  });