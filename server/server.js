/* eslint-disable no-undef */
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.use('*', (req, resp, next) => {
    console.log(req.headers, ' ----');
    resp.header.teste = 'çççççç';

    next();
});
app.get('*', (req, res) => {
    // console.log(req);
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});
