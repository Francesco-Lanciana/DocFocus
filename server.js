var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Tell it which folder we want to serve
app.use(express.static('public'));

// Start the server
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
