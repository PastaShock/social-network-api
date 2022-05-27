// import express router
const router = require('express').Router();
// import api endpoint routes
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

// Set routes to api endpoints
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;