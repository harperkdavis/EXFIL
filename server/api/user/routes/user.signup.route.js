const router = require('express').Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

const User = require('../../../database/schemas/user.schema');
    const { generateSession } = require('../../session');

router.post('/',

    check('username', 'Invalid username: must be 4 - 32 characters a-z, 0-9, or .-_ .')
        .not().isEmpty().not().matches(/([^a-z0-9_.\-])/gi).isLength({min: 4, max: 24}),
    check('password', 'Invalid password: must be between 8 - 64 characters.')
        .not().isEmpty().isLength({min: 8, max: 64}),
    check('email', 'Invalid email: must be a proper email 4 - 128 characters')
        .not().isEmpty().isEmail().isLength({min: 4, max: 128}),

    async (req, res) => {

    const valErrors = validationResult(req);
    if (!valErrors.isEmpty()) {
        return res.status(400).json({
            status: 2,
            message: valErrors.array()[0].msg,
        });
    }

    const {
        username,
        password,
        email
    } = req.body;

    try {

        if (await User.findOne({email})) {
            return res.status(400).json({
                message: 'Email is already in use!',
                status: 2,
            });
        }

        if (await User.findOne({username})) {
            return res.status(400).json({
                message: 'Username is already in use!',
                status: 2,
            });
        }

        let user = new User({
            username,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        const newUser = await user.save();

        await generateSession(req, false, newUser._id);

        return res.status(200).json({
            message: "Account created successfully!",
            status: 1,
        });

    } catch (e) {
        console.error(e.message);
        return res.status(500).json({
            message: 'An internal database error occurred. Please try again later.',
            status: 3,
        });
    }

});

module.exports = router;