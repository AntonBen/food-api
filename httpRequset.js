const { default: axios } = require("axios")
require('dotenv').config();

const yelp = axios.create({
    baseUrl: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: process.env.YELP_AUTH_TOKEN,
    }
})

module.exports = { yelp }
