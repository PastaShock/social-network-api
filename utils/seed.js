const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { createRandomUser, createRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = [];

    for (let i = 0; i < 30; i++) {
        let randUser = createRandomUser();
        users.push({ username: randUser.username, email: randUser.email });
        console.log(`added user: ${JSON.stringify(randUser)}`);
        let randThought = createRandomThought();
        thoughts.push({ thoughtText: randThought.thoughtText.quote, username: randThought.username })
        console.log(`added random thought\n${JSON.stringify(randThought.thoughtText.quote)}\nto random user: ${JSON.stringify(randThought.username)}`)
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // loop through the saved applications, for each application we need to generate a application response and insert the application responses
    console.table(users);
    console.table(thoughts)
    console.info('Seeding complete! 🌱');
    process.exit(0);
});