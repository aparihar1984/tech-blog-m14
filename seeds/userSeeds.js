const { User } = require('../models');

const userData = [
    {
        username: "Ash Parihar",
        password: "password1"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;