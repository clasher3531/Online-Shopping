const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
require('../backend/db/Connection');
const customerRouter = require('../backend/routers/Customer');
dotenv.config({path: "../../config.env"});

const server = express();
const port = process.env.PORT || 9000;

const buildPath = path.join(process.cwd(), 'build');

server.use(express.static(buildPath));
server.use(express.json())
server.use(customerRouter);


server.get('*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})