/* 
  File: teamsController.js
  Student's Name: Abhirami Pradeep Susi
  Student ID: 200589663
  Date: 18 Oct, 2024
*/

const fs = require("fs");
const Teams = require("../models/teamsModel");

/**
 * Function to import teams data to database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void} - Returns success message on teams creation or an error message.
 */

importTeams = async (req, res) => {
  try {
    // Read data from teams.json
    const data = JSON.parse(fs.readFileSync("./teams.json", "utf-8"));
    const count = await Teams.countDocuments();
    if (count === 0) {
      await Teams.create(data);
      res.status(200).send("Data successfully imported to mongoDB");
    } else {
      res.status(200).send("Data already exists, skipping import");
    }
  } catch (e) {
    res.status(500).send("Error importing data");
  }
};

module.exports = {importTeams}