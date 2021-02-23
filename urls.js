/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const shortId = require('shortid');

const urls = {};

// get all URLS_List

router.get('/', (req, res) => {
    const urlList = [];

    Object.keys(urls).forEach((url) => {
        urlList.push({
            id: url,
            long_url: urls[url],
        });
    });
    res.status(200).send(urlList);
});

// post the short_url

router.post('/', (req, res) => {
    const longUrl = req.body.long_url;
    console.log("URLLIST: ", longUrl);
    const id = shortId.generate();

    urls[id] = longUrl;
    res.status(201).send({ id });
});

// get the long_url with shorten id

router.get('/:id', (req, res) => {
    const inputId = req.params.id;
    const outputUrl = urls[inputId];

    if (outputUrl) {
        res.status(200).send({
            id: inputId,
            long_url: outputUrl,
        });
    } else {
        res.status(404).send({
            status: '404',
            result: 'invalid short url id',
        });
    }
});

module.exports = router;
