
const generateSession = async (req, guest, id) => {
    req.session.guest = guest;
    req.session.user = id;

    await req.session.save(function(err) {
        if (err) throw err;
    });
}

module.exports = {
    generateSession,
}