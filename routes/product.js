const express = require('express');
const prodCont = require('../controller/product');

const router = express.Router();

module.exports = app => {
    router.get('/', prodCont.getAll);
    router.get('/id:', prodCont.getOne);
    router.post('/', prodCont.post);
    router.delete('/id', prodCont.deleteOne);
    router.delete('/', prodCont.deleteAll);
    router.put('/id', prodCont.update);

    app.use('/api/product', router);
};