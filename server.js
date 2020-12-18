var express = require('express');
var app = express();

app.use(express.static('./dist/money-transfer'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/money-transfer/'}
  );
});
app.listen(process.env.PORT || 8080);