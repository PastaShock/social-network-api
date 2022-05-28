const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { createRandomUser } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});

    const users = [];

    for (let i = 0; i < 30; i++) {
        let randUser = createRandomUser();
        users.push({ randUser });
        console.log(`added user: ${JSON.stringify(randUser)}`);
    }

    await User.collection.insertMany(users);

    // loop through the saved applications, for each application we need to generate a application response and insert the application responses
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});