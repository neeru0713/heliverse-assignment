const User = require('../models/user');

const getUsers = async (req, res) => {
    const { page = 1, limit = 20, search = '', domain, gender, available } = req.query;

    const filters = {};
    if (domain) filters.domain = domain;
    if (gender) filters.gender = gender;
    if (available !== undefined) filters.available = available;

    try {
        const users = await User.find({ ...filters, name: { $regex: search, $options: 'i' } })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const count = await User.countDocuments({ ...filters, name: { $regex: search, $options: 'i' } });

        res.json({ users, totalPages: Math.ceil(count / limit) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    const { name, domain, gender, available } = req.body;

    try {
        const user = new User({ name, domain, gender, available });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
