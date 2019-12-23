const path = require("path");
const sassMiddleware = require("node-sass-middleware");


var express = require('express');
var exphbs = require('express-handlebars');
var app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  // res.sendfile('index.html');
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/contact', function (req, res) {
  res.render('contact', {
    layout: 'additional'
  });
});

app.get('/partners', function (req, res) {
  res.render('partners');
});

app.get('/portfolio', function (req, res) {
  res.render('portfolio');
});

app.use(
  sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css/"),
    outputStyle: "compressed",
    prefix: "/css"
  })
);


app.use(express.static("public"));
app.listen(3000);