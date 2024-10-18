const express = require('express');
const { importTeams } = require('../controllers/teamsController');
const router = express.Router();

//Route to import teams data to database
router.post('/import',importTeams);

module.exports = router;