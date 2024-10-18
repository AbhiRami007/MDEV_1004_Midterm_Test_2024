const express = require('express');
const { importTeams, getAllTeams, getTeamById } = require('../controllers/teamsController');
const router = express.Router();

//Route to import teams data to database
router.post('/import',importTeams);

//Route to get all teams data from database
router.get('/',getAllTeams);

//Route to get team data by id from database
router.get('/:id',getTeamById);

module.exports = router;