const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Trybe@123',
  database: 'first_crud'
});

module.exports = connection;
