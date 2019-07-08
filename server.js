/*
 * This is the template for a server.js file.  Follow the steps below and read
 * the comments for creating your own (or you can just copy this file).
 */

/* Step 1
 *
 * Import needed packages
 *
 */
const express = require('express');
const app = express();
const hbs = require('hbs');

/* Step 2
 *
 * import routers from controllers/
 *
 */
const { router } = require('./controllers/index.js');


/* Step 3
 *
 * Register middleware...
 */

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string
 */
app.use(express.urlencoded());

/* Step 3.b
 *
 * ...to parse the body of the HTTP requests from a JSON string
 * replace the above line with this
 */
app.use(express.json());

/* Step 3.b
 *
 * add method-override middleware for "faking" DELETE and PUT/PATCH requests
 */
// app.use(methodOverride('_method'));

/* Step 3.c
 *
 * use the `./public` directory to host static resources such as css and
 * image files
 */
app.use(express.static(`${__dirname}/public`));

/* Step 3.b
 *
 * set the view engine of express to use the hbs (handlebars) package
 */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/favicon.ico', express.static('favicon.ico'));
app.use('/', router);

/* Step 5
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file
 */
const PORT = process.env.PORT || 3000;

/* Step 6
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})
