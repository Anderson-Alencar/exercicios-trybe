const connection = require('./connection');

const create = async ({firstName, lastName, email, password}) => {
  const [user] = await connection.execute(
    'INSERT INTO first_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );

  return {
    id: user.insertId,
    firstName,
    lastName,
    email,
  };
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM first_crud.users'
  );

  return users;
};

const getById = async (id) => {
  const [user] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM first_crud.users WHERE id = ?',
    [id]
  );

  return user;
};

const update = async ({firstName, lastName, email, password}, id) => {
  const [user] = await connection.execute(
    `
    UPDATE first_crud.users
    SET 
      first_name = ?, 
      last_name = ?, 
      email = ?, 
      password = ?
    WHERE id = ?
    `
    ,
    [firstName, lastName, email, password, id]
  );

  return {
    id,
    firstName,
    lastName,
    email,
  };
}

module.exports = {
  create,
  getAll,
  getById,
  update,
}