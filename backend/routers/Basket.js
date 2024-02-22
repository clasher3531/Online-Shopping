const express = require('express');
const router = new express.Router();
const Basket = require('../models/basket');

router.get('/basket', async function(req, res) {
    res.send('This is get basket route');
})

module.exports = router;