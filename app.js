const express = require('express');
const connec = require('./model/db');
const bodyparser = require('body-parser');
const routes = require('./routes/index');
const {
    JSend
} = require('jsend-express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const jsend = new JSend({
    name: 'Jointly',
    release: '1',
    version: '0.0.1'
});
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const {
    PORT
} = process.env;
app.use(jsend.middleware.bind(jsend));

app.use('/', routes);

connec.sync({
        force: true
    })
    .then(result => {
        console.log('connect to the port');
    })
    .catch(err => {
        console.log('dint connect to the port');
    });

app.listen(PORT || 3000, err => {
    if (!err) console.log('reading from port 3000');
});

