/* 
	File: teamsModel.js
	Student's Name: Abhirami Pradeep Susi
	Student ID: 200589663
	Date: 18 Oct, 2024
  Description: Schema for creating teams data
*/

const mongoose = require('mongoose');

// Teams Schema Definition
const TeamsSchema = new mongoose.Schema({
    teamId:{type:Number},
    teamName :{type:String},
    city:{type:String},
    founded:{type:String},
    coach:{type:String},
})

// Teams model creation
const Teams = mongoose.model('Teams',TeamsSchema);

// Exporting the Teams model
module.exports = Teams;