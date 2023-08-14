let express = require('express');
let app = express();

let entryPath = `${__dirname}/views/index.html`;

app.get('/', (request, response) => response.sendFile(entryPath));

































 module.exports = app;
