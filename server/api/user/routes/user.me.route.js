const router = require('express').Router();

const User = require('../../../database/schemas/user.schema');

router.get('/', async (req, res) => {
    if (req.session.user) {
        const user = await User.findOne({_id: req.session.user});

        if (!user) {
            req.session.destroy(function (err) {
                if (err) throw err;
            });

            return res.status(500).send('Internal error occurred: session user was not found in database.');
        }

        const body = {
            id: user._id,
            username: user.username,
            email: user.email,
            creationDate: user.creationDate,
            moderator: user.moderator,
            guest: user.guest,
        };
        return res.status(200).json(body);
    } else {
        return res.status(401).send('');
    }
});

module.exports = router;