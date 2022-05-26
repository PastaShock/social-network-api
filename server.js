const express = require('express');

// point to the mongo connection
const connection = require('./config/connection');

// initialize the express router
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

connection();

app.listen(PORT, () => {
    console.log(` Connected on localhost:${PORT} `)
});