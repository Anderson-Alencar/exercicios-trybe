const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', (_req, res) => {
  Book.findAll()
    .then((books) => res.status(200).json(books))
    .catch((e) => res.status(500).json(e.message));
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book  = await Book.findByPk(id);

    if(!book) return res.status(404).json({message: 'Book not found'});

    res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado'})
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt } = req.body;
    const book  = await Book.create({title, author, pageQuantity, createdAt});

    res.status(201).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado'})
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, createdAt } = req.body;
    const [book]  = await Book.update(
      { title, author, pageQuantity, createdAt }, 
      { where: { id } }
    );

    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({
      id,
      title,
      author,
      pageQuantity,
      createdAt
    });
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado'})
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book  = await Book.destroy({ where: { id }});

    res.status(200).json({ message: 'Book removed'} );
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado'})
  }
});

module.exports = router;