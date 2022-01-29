const express =  require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    // res.send('<h2>User addin form</h2>');
    res.render('form', {path: '/', pageTitle: 'Add User'});
});

router.post('/add-user', (req, res, next) => {
    users.push({'name' : req.body.username});
    res.redirect('/');
});

exports.users = users;
exports.routes = router;