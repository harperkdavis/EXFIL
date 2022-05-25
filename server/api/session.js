
const generateSession = async (req, guest, id) => {
    await req.session.regenerate(function (err) {
        if (err) throw err;
    });

    req.session.guest = guest;
    req.session.user = id;

    await req.session.save(function(err) {
        if (err) throw err;
    });
}

module.exports = {
    generateSession,
}