const express = require('express');

const router = express.Router();
const urls = require('./urls');

router.use('/urls', urls);

router.get('/', (req, res) => {
    res.send('Hello API');
});

module.exports = router;
