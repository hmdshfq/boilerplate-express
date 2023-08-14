let express = require('express');
let app = express();

let entryPath = `${__dirname}/views/index.html`;
let staticPath = `${__dirname}/public`;

/* 
    Adding middleware - A middleware is a function that intercepts
    the route handlers and adds some kind of information. It needs to be mounted using the app.use(path, middleware function) method.

    The express.static() middleware serves the files in the static (public) folder.
*/

app.use('/public', express.static(staticPath));
app.get('/', (request, response) => response.sendFile(entryPath));
app.get('/json', (request, response) => response.json({
    "message": "Hello json"
}));

































 module.exports = app;
