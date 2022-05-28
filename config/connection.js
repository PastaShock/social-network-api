const { connect, connection } = require('mongoose');

// initialize mongoose connection with either the env or a default
connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;