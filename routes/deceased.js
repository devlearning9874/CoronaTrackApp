const express = require("express");
const https   = require("https");
const jwt   = require("jsonwebtoken");
const router = express.Router();
const Decease = require('../models/deceased');

const mongoose = require("mongoose");


const db = "mongodb+srv://scholarprobe:FkfdIPmFjekAjQFB@scholarprobe.tzmyf.mongodb.net/coronatrack?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if(err){
        console.log("Error"+ err);
    }else{
        console.log("connected to mongodb");
    }
});


// //setquestion
// router.post("/deceased", (req, res) => {
//     let deceaseData = req.body;
//     let decease = new Decease(deceaseData);
//     decease.save((error, createdDeceased) => {
//         if(error){
//             console.log(error);
//         }else{
//             let payload = { subject: createdQuestion._id}
//             let token = jwt.sign(payload, 'secretKey')
//             res.status(200).send({token});
//         }
//     });
//   });
  
//   //end


router.get("/deceased",(req, res) =>{
    let que;
    Decease.find({state:"Kerala"}, (error, que) =>{
    // console.log(que);
     //var obj = JSON.parse('que');
     res.send(que); 
    });
   // console.log(que);
       
  });
  module.exports = router;
  