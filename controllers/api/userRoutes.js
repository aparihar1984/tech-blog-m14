const router = require('express').Router();
const { User } = require('../../models');

// Using the POST method to sign up a user ('/api/user)
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.status(201).json({ message: `Account created for ${dbUserData.username}`});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Using the POST method to login a user ('/api/user/login')
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {username: req.body.username}
        });
        if (!dbUserData) {
            res.status(400).json({ message: `User id ${req.params.id} is not valid.` });
            return;
        }
        // Validating the password
        const pwValidated = await dbUserData.checkPassword(req.body.password)
        if (!pwValidated) {
            res.status(400).json({ message: "Incorrect password!" });
            return;
        }
        // Starting the user session
        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;        
        res.status(200).json({ message: "You are logged in!" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Using the POST method to logout the user ('/api/user/logout')
router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const dbUserData = await req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch {
        res.status(400).end();
    }
});

module.exports = router;