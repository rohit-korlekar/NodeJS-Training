const express =  require('express');

const formData = require('./form');

const router = express.Router();

router.get('/users', (req, res, next) => {
    // res.send('<h2>User list</h2>');
    res.render('users', {users: formData.users, path: '/users', pageTitle: 'Users List'});
});

module.exports = router;