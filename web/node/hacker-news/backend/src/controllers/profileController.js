const { User } = require('../models')

const getProfile = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const profileController = {
    getProfile
}

module.exports = profileController