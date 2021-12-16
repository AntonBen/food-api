const Ajv = require('ajv');
const ajv = new Ajv();

const user = {
    type: 'object',
    properties: {
        name: {type: 'string'},
        email: { type: 'string'},
        password: {type: 'string'},
    },
    required: [''],
    additionalProperties: true
};

const signUpUser = {
    type: 'object',
    properties: {
        name: {type: 'string'},
        email: { type: 'string'},
        password: {type: 'string'},
    },
    required: ['name', 'email', 'password'],
    additionalProperties: false
}

const userSchema = ajv.compile(user);
const signUpUserSchema = ajv.compile(signUpUser);

module.exports = { userSchema, signUpUserSchema };