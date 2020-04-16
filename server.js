const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use('/api/puppies', require('./routes/api/puppies'));
app.use('/api/cats', require('./routes/api/cats'));
app.use('/api/users', require('./routes/api/users'));

app.listen(port, () => {
    console.log(`Express is listening on port ${port}.`)
});
