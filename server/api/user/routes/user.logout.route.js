const router = require('express').Router();

const User = require('../../../database/schemas/user.schema');

router.post('/', async (req, res) => {
    req.session.destroy(function (err) {
        if (err) throw err;
    });
});

module.exports = router;