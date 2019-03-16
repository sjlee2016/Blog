const express = require('express');
const path = require('path');
var request = require("request");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoDB = require("mongodb");
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

app.get('/api/comment/:id', (req,res) => {
    var json = {}
    var ObjectId = mongoDB.ObjectID;
    Comment.find({"_id": ObjectId(req.params.id)}).limit(1).exec(function(err,comment){
       if(err){
           res.json({});
       }
       console.log(comment[0]);
       json["comments"]= comment[0];
       res.json(json);
    });
    // //     if(err){
    // //         res.json(json);
    // //     }else {
    // //         json["comment"].push(comment);
    // //         res.json(json);
    // //     }
    // // })
    // // json["comment"].push()
})
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