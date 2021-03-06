const { pool } = require('../dbConfig');
const { signUpUserSchema } = require('../schema/userSchema');

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const validObject = signUpUserSchema(req.body);

  res.json(validObject);
};

module.exports = { getUsers, addUser };
