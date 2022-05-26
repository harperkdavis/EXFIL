const pruneDatabase = require('./database/prune');

const User = require('./database/schemas/user.schema');
const Session = require('./database/schemas/session.schema');

const runInterval = async () => {
    await pruneDatabase();
    let userCount = await User.countDocuments();
    let sessionCount = await Session.countDocuments();
    console.log(Date.now() + ` [Interval] Usercount: ${userCount}, Sessioncount: ${sessionCount}`)
}

module.exports = runInterval;