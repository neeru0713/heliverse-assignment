const express = require('express');
const { createTeam, getTeamById } = require('../controllers/teamController');
const router = express.Router();

router.post('/', createTeam);
router.get('/:id', getTeamById);

module.exports = router;
