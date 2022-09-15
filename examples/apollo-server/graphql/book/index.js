const {
  addBook,
  getAllBooks,
  getSingleBook,
 } = require('./book.service')

async function getAllBookHandler(parent, args) {
  const books = await getAllBooks()

  return books
}

async function getSingleBookHandler(parent, args) {
  const { title } = args

  const book = await getSingleBook(title)

  return book
}

async function addBookHandler(parent, args) {
  const { title, author, type } = args.input

  const book = {
    title,
    author,
    type
  }

  const newBook = await addBook(book)

  return newBook
}

module.exports = {
  query: {
    allBooks: getAllBookHandler,
    singleBook: getSingleBookHandler,
  },
  mutation: {
    addBook: addBookHandler,
  },
}
