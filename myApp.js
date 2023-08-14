let express = require('express');
let app = express();

let entryPath = `${__dirname}/views/index.html`;
let staticPath = `${__dirname}/public`;

/* 
    Adding middleware - A middleware is a function that intercepts
    the route handlers and adds some kind of information. It needs to be mounted using the app.use(path, middleware function) method.

    The express.static() middleware serves the files in the static (public) folder.
*/

app.use(staticPath, express.static())
app.get('/', (request, response) => response.sendFile(entryPath));

































 module.exports = app;
