const Book = require('./book.model');

function getAllBooks() {
  return Book.find();
}

function getSingleBook(title) {
  return Book.findOne({ title });
}

function addBook(book) {
  const newBook = new Book(book);

  return newBook.save();
}

module.exports = {
  addBook,
  getAllBooks,
  getSingleBook,
}
