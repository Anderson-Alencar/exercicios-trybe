const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Book = require('./models/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll );

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.get('/books', async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const{ id } = req.params;
  const books = await Book.getByAuthorId(id);

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos'});
  };

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!'})
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});