const express = require("express");
const https   = require("https");
const router = express.Router();

const fetch = require("node-fetch");
const setquestion = require('../models/setquestion');

const mongoose = require("mongoose");


const db = "Your mongodb app url";

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


 router.get('/contact-helpline', async(req,res) => {


    const api_url = "https://api.rootnet.in/covid19-in/contacts"
    const fetch_respose = await fetch(api_url)
    const json = await fetch_respose.json()
    res.json(json.data.contacts.regional);

  
   })
  
    
   router.get('/notification-advisory', async(req,res) => {
    

    const api_url = "https://api.rootnet.in/covid19-in/notifications"
    const fetch_respose = await fetch(api_url)
    const json = await fetch_respose.json()
    res.json(json.data.notifications);

   })


module.exports = router;
