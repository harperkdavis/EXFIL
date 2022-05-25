const router = require('express').Router();
const user = require('./user/user.route');

router.get('/', (req, res) => {
    res.status(200).send('This is the base route of the EXFIL API.');
});

router.use('/user', user);

module.exports = router;