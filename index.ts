// This script start express server 
require("dotenv").config()
const EXPRESS = require("express");
const GOOGLE = require("googleapis").google;
const JWT = require("jsonwebtoken");
const OAUTH = GOOGLE.auth.OAuth2;
const CONFIG = require("./config");
const mongoose = require('mongoose');
const oauth2Client = new OAUTH(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);
const APP = EXPRESS();

const conn = mongoose.connect(process.env.URI);

// setting app
APP.set("view engine", "ejs");
APP.set("views", __dirname+"/views")


// Controllers
APP.use("/", require("./ser/Home"))
APP.use("/quiz", require("./ser/Quiz"))


APP.listen(CONFIG.PORT, () => {
    console.log(`[SERVER]: starting at: ${CONFIG.PORT}`)
});