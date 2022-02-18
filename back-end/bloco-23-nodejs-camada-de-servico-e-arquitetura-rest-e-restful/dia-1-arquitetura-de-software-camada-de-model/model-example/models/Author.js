const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id_authors, first_name, middle_name, last_name FROM model_example.authors',
  );
  return authors.map(serialize);
};

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id_authors, first_name, middle_name, last_name FROM model_example.authors WHERE id_authors = ?',
    [id]
  );

  if (authorData.length === 0) return null;

  return  serialize(authorData)[0];
};

const create = (firstName, middleName, lastName) => {
  const [author] = connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  )
  
  return author;
}

module.exports = {
  getAll,
  findById,
  create,
};