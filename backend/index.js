const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const port = process.env.PORT || 9000;

const buildPath = path.join(process.cwd(), 'build');

app.use(express.static(buildPath));
app.use(express.json())

app.get('*', function (req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})