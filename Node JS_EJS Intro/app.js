const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const formData = require('./routes/form');
const userRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(formData.routes);

app.use((req, res, next) => {
    res.status(404).render('404', {path: '', pageTitle: 'Not found'});
});

app.listen(3000);