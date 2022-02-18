const Author = require('../models/Author')

const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const [author] = await Author.create(firstName, middleName, lastName);

  return getNewAuthor({
    id: author.insertId,
    firstName,
    middleName,
    lastName,
  });
}

module.exports = {
  getAll,
  findById,
  create,
}