require('dotenv').config();

const name = process.env.MY_NAME || 'default name';
const city = process.env.MY_CITY || 'default city';
const language = process.env.MY_LANGUAGE || 'default language';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
