const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/about', (req, res, next)=> {
    res.render('about');
});

app.get('/works', (req, res, next)=> {
    res.render('works');
});




app.listen(3000, ()=> {
    console.log("working");
});