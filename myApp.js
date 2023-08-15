let express = require('express');
let app = express();
require('dotenv').config();

/* 
    Adding middleware - A middleware is a function that intercepts
    the route handlers and adds some kind of information. It needs to be mounted
    using the app.use(path, middleware function) method.

    The express.static() middleware serves the files in the static (public) folder.

    Always mount the middleware at the beginning of your code
*/

let staticPath = `${__dirname}/public`;
app.use('/public', express.static(staticPath));

app.use((request, response, next) => {
    console.log(`${request.method} ${request.path} - ${request.ip}`);
    next();
});

let entryPath = `${__dirname}/views/index.html`;
app.get('/', (request, response) => response.sendFile(entryPath));

let responseObject = {
    message: 'Hello json',
};
app.get('/json', (request, response) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        responseObject.message = responseObject.message.toUpperCase();
        return response.json(responseObject);
    } else {
        return response.json(responseObject);
    }
});

module.exports = app;
