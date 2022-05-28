const { quotes } = require('./quotes');

const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const emailDomain = [
    'yahoo',
    'hotmail',
    'gmail',
    'protonmail',
    'comcast',
    'verizon',
    'earthlink',
    'xfinity',
    'live',
    'icloud',
    'msn',
    'mozilla',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomEmail = () => {
    return getRandomArrItem(emailDomain);
};

const getRandomQuote = () => {
    return getRandomArrItem(quotes);
};

const createRandomUser = () => {
    let name = getRandomName();
    return {
        //   _id: uuid(),
        username: name,
        email: `${name.replace(/\s/g, '.')}@${getRandomEmail()}.com`,
    }
}

createRandomThought = () => {
    return {
        thoughtText: getRandomQuote(),
        username: getRandomName()
    }
}

// Export the functions for use in seed.js
module.exports = { createRandomUser, createRandomThought };
