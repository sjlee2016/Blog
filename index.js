const express = require('express');
const path = require('path');
var request = require("request");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var moment = require('moment');

mongoose.connect('mongodb://localhost:27017/blog');



var app = express(),
passport = require("passport"),
LocalStrategy = require("passport-local"),
User = require("./models/user"),
flash = require("connect-flash"),
Comment = require("./models/Comment"),
Post = require("./models/Post"),
seedDB = require("./manageDB/seed");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item2"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/blog/page/:page', (req,res) =>
{
    var json = {};
    json["posts"] = [];
    json["page"] = [];
    json["isEndPage"] = false;
    
   var isEndPage = false;
   Post.find({})
   .sort({'posted' : -1 } )
   .skip(req.params.page * 5)
   .limit(5)
   .exec(function(err,posts){
       if(err){
           redirect("back");
       }else{
           if(posts.length < 5) {
               isEndPage = true;
           }
           json["posts"].push(posts);
           json["page"].push(req.params.page);
           json["isEndPage"] = isEndPage;
           res.json(json);
       }
   });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);