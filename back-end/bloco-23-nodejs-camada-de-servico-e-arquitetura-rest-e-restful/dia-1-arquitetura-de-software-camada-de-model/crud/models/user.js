const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const [user] = await connection.execute(
    'INSERT INTO first_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );
  console.log(user);

  return {
    id: user.insertId,
    firstName,
    lastName,
    email,
    password
  };
}

module.exports = {
  create,
}