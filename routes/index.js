const router = require('express').Router();
const notFound = require('../404')
// import the api routes from the subfolder
const apiRoutes = require('./api');

// set the URL route of the api
router.use('/api', apiRoutes);

// error route
router.use((req, res) => {
    res.status(404).send(`${notFound}`);
  });

// Module exports router
module.exports = router;