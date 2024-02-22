const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const customerRouter = require('../backend/routers/Customer');
const basketRouter = require('../backend/routers/Basket');
dotenv.config();
require('../backend/db/Connection');

const server = express();
const port = process.env.PORT || 9000;

const buildPath = path.join(process.cwd(), 'build');

server.use(express.static(buildPath));
server.use(express.json())
server.use(customerRouter);
server.use(basketRouter);

server.get('*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})