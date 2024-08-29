const Team = require('../models/team');
const User = require('../models/user');

const createTeam = async (req, res) => {
    const { name, members } = req.body;

    const users = await User.find({ _id: { $in: members } });

    const uniqueDomains = new Set(users.map(user => user.domain));
    const availableMembers = users.filter(user => user.available);

    if (uniqueDomains.size !== users.length || availableMembers.length !== users.length) {
        return res.status(400).json({ message: 'Users must have unique domains and be available' });
    }

    try {
        const team = new Team({ name, members });
        await team.save();
        res.status(201).json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('members');
        res.json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createTeam, getTeamById };
