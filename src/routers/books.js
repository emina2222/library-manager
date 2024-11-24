const express = require('express');
const { getBooks, addBook } = require('../controllers/booksController');

const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);

module.exports = router;
