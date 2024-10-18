const express = require('express');
const { importTeams, getAllTeams } = require('../controllers/teamsController');
const router = express.Router();

//Route to import teams data to database
router.post('/import',importTeams);

//Route to get all teams data from database
router.get('/',getAllTeams);

module.exports = router;