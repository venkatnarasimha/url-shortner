/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = process.env.port || 3000;
const api = require('./api');

app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Service Started @${port}`);
});
