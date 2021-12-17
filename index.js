const express = require('express');
require('dotenv').config();
const { getLocationSuggestions } = require('./service/location');
const { getRestaurants } = require('./service/restaurants');
const { addUser, getUsers } = require('./service/user');
const app = express();

app.use(express.json())

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.get('/', (req,res) => {
    res.json({test:"test"});
});

app.get('/restaurants', getRestaurants);
app.get('/restaurants/suggestions', getLocationSuggestions)

app.get('/users', getUsers);
app.post('/addUser', addUser);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );

app.listen(3001, () => {
    console.log('app running 3001');
});

module.exports = {
    app
};