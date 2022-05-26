const router = require('express').Router();


router.get('/', (req, res) => {
    req.session.reload(function (err) {
        if (err) console.error(err);

        if (req.session.user) {
            res.status(200).json({
                active: true,
                user: req.session.user,
                guest: req.session.guest,
            });
        } else {
            res.status(200).json({
                active: false,
            });
        }
    });
});

router.use('/login', require('./routes/user.login.route'));
router.use('/logout', require('./routes/user.logout.route'));
router.use('/signup', require('./routes/user.signup.route'));
router.use('/me', require('./routes/user.me.route'));
router.use('/guest', require('./routes/user.guest.route'));

module.exports = router;