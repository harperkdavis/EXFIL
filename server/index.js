const app = require('./app');

const port = process.env.PORT || 7777;

app.listen(port, () => {
    console.log(`EXFIL server up and running on port ${port}!`);
});