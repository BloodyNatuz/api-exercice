const express = require('express');
const hbs = require('hbs');
const userAll = require('./api/all/route');
const user1 = require('./api/1/route');
const user2 = require('./api/2/route');
const app = express();

app.set('view engine', 'hbs');
app.set('views', './views/')

// Afficher la page index sur la route /
app.get('/', (req, res) =>{
    console.log("Home page get a /GET request.")
    res.render('index', {
        sujet: 'Accueil',
    });
});

// Handling user/all Route
app.use('/api/user/all', userAll);

// Handling user/1 Route
app.use('/api/user/1', user1);

// Handling user/2 Route
app.use('/api/user/2', user2);

app.listen(4000, ()=>{
    console.log("Listening on port 4000");
});