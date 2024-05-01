const { User } = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        } else if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, 'secret', { expiresIn: '1h' });
        res.json({ message: "Success!", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


const authController = {
    login
}

module.exports = authController;