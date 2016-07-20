var express           = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser        = require('body-parser');
var session           = require('express-session');
var mysql             = require('mysql');
var routes            = require('./app/routes/routes.js');
var app               = express();


app.set('views', __dirname + '/app/views');


app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static('public'));
app.engine('handlebars', expressHandlebars({
                                    defaultLayout: __dirname + '/app/views/layouts/main.handlebars',
                                    layoutsDir: __dirname + '/app/views/layouts',
                                    partialsDir: __dirname + '/app/views/partials'}));
app.set('view engine', 'handlebars');

routes.routes(app);

var PORT = process.env.PORT || 8000;

 app.listen(PORT, function() {
    console.log("Listening on %s", PORT);
  });
