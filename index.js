const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express();

mongoose.connect('mongodb://localhost/library')
var Book = require('./book_model')

//routes for homepage
app.get('/',function(req,res){
  res.send("Hi there");
  console.log('at home page');
})

////routes for book
app.get('/books',function(req,res){

  console.log('book page');
  Book.find({}).exec(function(err,book){
    if(err){
      res.send('error');
    }
    else{
      console.log(book)
      res.json(book)
    }
  })
})

const port = 3020;
app.listen(port,function(){
  console.log("Im Listening on",port);
  // res.send("Hi there!")
})
