const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// set morgan
app.use(morgan('dev'));

// set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use('/', routes);

// buat server
app.listen(PORT, () => {
    console.log('Server running at port ' + PORT);
});