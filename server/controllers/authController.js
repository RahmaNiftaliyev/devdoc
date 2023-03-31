// @ts-nocheck
const User = require('../models/User');
const { generateToken } = require('../utils/auth');

exports.register = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = generateToken(user);
        res.status(201).send({ user, token });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        const token = generateToken(user);
        res.send({ user, token });
    } catch (error) {
        next(error);
    }
};
