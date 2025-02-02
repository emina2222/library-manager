const express = require('express');
const booksRoutes = require('./books')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Books API! 📚');
});

router.use('/api/books', booksRoutes);

module.exports = router;