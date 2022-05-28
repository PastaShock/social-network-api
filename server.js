const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const { createRandomUser } = require('./utils/data');

// point to the mongo connection
const connection = db;

// initialize the express router
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(routes);

// connection();

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(` Connected on localhost:${PORT} `)
    });
})