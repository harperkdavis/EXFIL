const mongoose = require('mongoose');

const databaseConnect = (uri) => {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true
        });
        console.log('Connected to EXFIL database!');
    } catch (e) {
        console.error('Error connecting to database: ' + e.stack);
        setTimeout(() => {
            databaseConnect(uri);
        }, 5000);
    }
}

module.exports = databaseConnect;