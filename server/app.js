const express = require('express');
const cors = require('cors');
const path = require('path');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const MongoStore = require('connect-mongo');

const app = express();

app.use(require('morgan')('tiny'));

const api = require('./api');
const { notFound, errorHandler } = require('./middleware/errors.middleware');

const MONGO_URI = `mongodb+srv://admin:${ process.env.MONGO_PASSWORD }@hked.mwinf.mongodb.net/exfil?retryWrites=true&w=majority`;
const databaseConnect = require('./database/connect');
databaseConnect(MONGO_URI);

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { secure: false, rolling: true, maxAge: 14400000},
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: MONGO_URI
    })
}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.status(200).send('Development server base (you shouldn\'t be able to see this!)');
    });
}

app.use('/api/v1', api);
app.use(notFound);
app.use(errorHandler);

const runInterval = require('./interval');
runInterval();
setInterval(runInterval, 60000);

module.exports = app;