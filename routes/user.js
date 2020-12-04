const express = require('express');
const UserCont = require('../controller/user');

const router = express.Router();

module.exports = app => {
    router.get('/', UserCont.getAll);
    router.get('/:id', UserCont.getOne);
    router.post('/signup', UserCont.signUp);
    router.post('/signin', UserCont.signIn);
    // router.delete('/userId', UserCont.deleteOne);
    // router.delete('/', UserCont.deleteAll);
    // router.put('/userId', UserCont.update);

    app.use('/api/user', router);
};



