var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(1234, function() {
  console.log('listening on port 1234');
});
