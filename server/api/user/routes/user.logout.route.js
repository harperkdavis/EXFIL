const router = require('express').Router();

const User = require('../../../database/schemas/user.schema');

router.post('/', async (req, res) => {
    const user = req.session.user;
    if (user !== undefined) {
        await User.findOneAndRemove({_id: user, guest: true});
    }

    await req.session.destroy(function (err) {
        if (err) throw err;
    });

    res.status(200).send('Successfully logged out!');
});

module.exports = router;