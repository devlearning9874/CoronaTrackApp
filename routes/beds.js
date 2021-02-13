const express = require("express");
const https   = require("https");
const router = express.Router();
const fetch = require("node-fetch");

router.get('/hospital-beds', async(req,res) => {
    const api_url = "https://api.rootnet.in/covid19-in/hospitals/beds"
    const fetch_respose = await fetch(api_url)
    const json = await fetch_respose.json()
    res.json(json.data.regional);
   
      })
//Medical College
router.get('/medical-college', async(req,res) => {
    
    const api_url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
    const fetch_respose = await fetch(api_url)
    const json = await fetch_respose.json()
    res.json(json.data.medicalColleges);
      })

module.exports = router;
