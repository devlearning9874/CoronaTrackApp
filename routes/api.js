const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const setquestion = require('../models/setquestion');

const mongoose = require("mongoose");


const db = "mongodb+srv://scholarprobe:FkfdIPmFjekAjQFB@scholarprobe.tzmyf.mongodb.net/scholarprobe?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if(err){
        console.log("Error"+ err);
    }else{
        console.log("connected to mongodb");
    }
});


router.get("/", (req, res)=>{
res.send("From api route");
});




  router.get("/physics",(req, res) =>{
     let que;
     setquestion.find({id:"Physics"}, (error, que) =>{
     // console.log(que);
      //var obj = JSON.parse('que');
      res.send(que); 
     });
    // console.log(que);
        
  });
  router.get("/chemistry",(req, res) =>{
    let que;
    setquestion.find({id:"Chemistry"}, (error, que) =>{
    // console.log(que);
     //var obj = JSON.parse('que');
     res.send(que); 
    });
   // console.log(que);
       
 });
 router.get("/Math",(req, res) =>{
  let que;
  setquestion.find({id:"Math"}, (error, que) =>{
  // console.log(que);
   //var obj = JSON.parse('que');
   res.send(que); 
  });
 // console.log(que);
     
});
module.exports = router;
