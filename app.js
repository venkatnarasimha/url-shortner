/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const api = require('./api');
const { urls } = require('./urldata');

app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

app.get('/:id', (req, res) => {
    const { id } = req.params;
    // console.log('id: ', id);
    const longUrl = urls[id];
    // console.log('from api: ', urls);
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send('invalid URL');
    }
});

app.listen(port, () => {
    console.log(`Service Started @${port}`);
});
