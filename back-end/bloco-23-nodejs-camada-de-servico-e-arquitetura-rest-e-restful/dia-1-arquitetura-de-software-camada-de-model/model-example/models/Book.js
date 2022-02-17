const Author = require('./Author')
const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books'
  );

  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?',
    [id]
  );

  return books;
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const create = (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, authorId],
  );
};

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
}