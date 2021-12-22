const axios = require('axios');
require('dotenv').config();

const yelp = axios.create({
  baseUrl: 'https://api.yelp.com/v3/businesses/',
  headers: {
    timeout: 1000,
    Authorization: process.env.YELP_AUTH_TOKEN,
  },
});

module.exports = { yelp };
