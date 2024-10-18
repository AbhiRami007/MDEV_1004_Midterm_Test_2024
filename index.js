/**
 * File: index.js
 * Author: Abhirami Pradeep Susi
 * StudentID: 200589663
 * Created On: 18 Oct, 2024
 * Description: Entry point for the API
 */

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require("express");
const mongoose = require("mongoose");
const teamsRoutes = require("./src/routes/teamsRoute")
//initialise express app
const app = express();

//MongoDB Atlas connection string
const mongoURI = process.env.MONGO_URI;

//Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
  }).catch((error)=>{
    console.log("Connection Error")
  });

// test route
app.get('/', (req, res) => {
    res.send('Welcome to the App');
});

//Use the teams routes
app.use('/teams', teamsRoutes);

//set the port
const PORT = process.env.PORT || 3000;

//start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
