const router = require('express').Router();

const User = require('../../../database/schemas/user.schema');

router.get('/', async (req, res) => {
    if (req.session.user) {
        const user = User.findOne({_id: req.session.user});

        if (!user) {
            req.session.destroy(function (err) {
                if (err) throw err;
            });

            return res.status(500).send('Internal error occurred: session user was not found in database.');
        }

        return res.status(200).json({
            username: user.username,
            email: user.email,
            creationDate: user.creationDate,
            moderator: user.moderator,
        });
    } else {
        return res.status(401).send('');
    }
});

module.exports = router;