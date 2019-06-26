const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

/** routes for common level data */
app.get('/:filename', (req, res) => {
    try {
        var filename = require('./' + req.params.filename);
        res.send(JSON.stringify(filename));
    } catch (err) {
        res.status(404).send();
    }

});
/** routes for property level data */
app.get('/property/:filename', (req, res) => {
    try {
        var filename = require('.' + req.url);
        res.send(JSON.stringify(filename));
    } catch (err) {
        res.status(404).send();
    }

});
/** routes for system level data */
app.get('/system/:filename', (req, res) => {
    try {
        var filename = require('.' + req.url);
        res.send(JSON.stringify(filename));
    } catch (err) {
        res.status(404).send();
    }

});
/** routes for rules group level data */
app.get('/rulesgroup/:filename', (req, res) => {
    try {
        var filename = require('.' + req.url);
        res.send(JSON.stringify(filename));
    } catch (err) {
        res.status(404).send();
    }

});

// used to get translations from local folder
app.get('locales/:filename', (req, res) => {
    try {
        var filename = require('./locales/' + req.params.filename);
        res.send(JSON.stringify(filename));
    } catch (err) {
        res.status(404).send();
    }

})
app.listen(9100, () => console.log('app listening on port 9100!'))