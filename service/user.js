const { pool } = require('../dbConfig.js');
const { signUpUserSchema } = require('../schema/userSchema.js');

const getUsers = ( req, res ) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}

const addUser = (req, res) => {
    const validObject = signUpUserSchema(req.body);
    

    res.json(req.body)
}

module.exports = { getUsers, addUser }