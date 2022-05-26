const mongoose = require('mongoose');

// initialize mongoose connection with either the env or a default
const connection = () => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connection;