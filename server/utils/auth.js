// @ts-nocheck
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const JWT_SECRET = 'my_secret_key';

const generateToken = (userId) => {
    const token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1d' });
    return token;
};

const verifyToken = async (token) => {
    try {
        const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

module.exports = { generateToken, verifyToken };
