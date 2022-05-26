const router = require('express').Router();
const uuid = require('uuid');

const User = require('../../../database/schemas/user.schema');
const {generateSession} = require("../../session");


router.post('/', async (req, res) => {
    const newUuid = uuid.v4();

    let user = new User({
        _id: 'GUEST__' + newUuid,
        username: 'guest+' + newUuid.substring(24),
        email: 'GUEST__EMAIL_' + newUuid,
        password: 'GUEST__PASSWORD_' + newUuid,
        guest: true,
    });

    const newUser = await user.save();

    await generateSession(req, true, newUser._id);

    return res.status(200).json({
        message: "Guest login successful!",
        status: 1,
    });
});

module.exports = router;