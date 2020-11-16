const express = require('express');
const BlogCont = require('../controller/blog');

const router = express.Router();

module.exports = app => {
    router.get('/', BlogCont.getAll);
    router.get('/:blogId', BlogCont.getOne);
    router.post('/', BlogCont.post);
    router.delete('/blogId', BlogCont.deleteOne);
    router.delete('/', BlogCont.deleteAll);
    router.put('/blogId', BlogCont.update);

    app.use('/api/blog', router);
};