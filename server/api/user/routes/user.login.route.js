const router = require('express').Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require("bcrypt");

const User = require('../../../database/schemas/user.schema');
const {generateSession} = require("../../session");


router.post('/',
    check('username', 'Invalid username.')
        .isLength({min: 3, max: 32}),
    check('password', 'Invalid password.')
        .isLength({min: 8, max: 64}),
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
        password
    } = req.body;

    try {

        let user;

        user = await User.findOne({
            username: username
        });

        if (!user) {

            user = await User.findOne({
                email: username,
            });

            if (!user) {
                return res.status(400).json({
                    message: 'User does not exist.',
                    status: 2,
                });
            }
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                message: 'Incorrect password.',
                status: 3,
            });
        }

        await generateSession(req, false, user._id);

        return res.status(200).json({
            message: 'Successfully logged in!',
            status: 1,
        })

    } catch (e) {
        console.error(e.message);
        return res.status(500).json({
            message: 'An internal database error occurred. Please try again later.',
            status: 3,
        });
    }
});

module.exports = router;