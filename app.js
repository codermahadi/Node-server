var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){
    // console.log(req.query);
    res.render('contact');
});

app.post('/contact', urlencodedParser, function(req, res){
    // console.log(req.query);
    console.log(req.body);
    res.render('contact');
});

app.get('/profile/:id', function(req, res){
    var data = {age: 26, job: 'developer', hobbis: ['Shalah', 'Dawya', 'Coding']}
    res.render('profile', {person: req.params.id, data: data});
})
app.listen(3030);
