const Ajv = require('ajv');
const ajv = new Ajv();

const restaurants = {
    type: 'object',
    properties: {
        location: {type: 'string'},
        limit: {
            type: 'integer',
            maximum: 50,
            minimum: 1,
        },
    },
    required: ['location'],
    additionalProperties: false,
};

const restaurantsSchema = ajv.compile(restaurants);

module.exports = { restaurantsSchema };