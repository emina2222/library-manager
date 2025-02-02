const bookRepository = require('../repository/booksRepository');

class BooksService {
  async getAllBooks() {
    return await bookRepository.getAll();
  }

  async createBook(book) {
    if (!book.id || !book.title) {
      throw new Error('All fields are required');
    }
    return await bookRepository.addBook(book);
  }
}

module.exports = new BooksService();