const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(request, response) {
    //response.sendFile(path.join(__dirname + 'views/index.html'));
    response.sendfile('views/index.html');
});
app.post('/usuarios', function(request, response) {
    response.send('Hello Usuarios! POST');
});

app.listen(3000, function() {
    console.log('Server running on port 3000!');
});