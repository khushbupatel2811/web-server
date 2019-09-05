var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js')

app.use(middleware.logger);

// app.get('/', function (req, res) {
//     res.send('Hello Express!');
// });
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About Us');
});
// app.use(middleware.requireAuthentication);

// console.log(__dirname); //path to the public folder
//app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '!');
});