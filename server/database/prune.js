
const User = require('./schemas/user.schema');
const Session = require('./schemas/session.schema');

async function pruneDatabase() {
    const guestsToPrune = [];
    await User.find({guest: true}).exec(async (err, results) => {
        if (err) console.error(err);

        for (let user of results) {
            let session = await Session.findOne({session: new RegExp( `/"user":"${user._id}"/gi`) });

            if (!session) {
                guestsToPrune.push(user._id);
            }
        }

        for (let id of guestsToPrune) {
            await User.findOneAndRemove({_id: id, guest: true});
        }

    });

}

module.exports = pruneDatabase;