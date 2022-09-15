const {
  addBook,
  getAllBooks,
  getSingleBook,
 } = require('./book.service')

async function getAllBookHandler(parent, args, ctx) {
  console.log("🚀 ~ file: index.js ~ line 8 ~ getAllBookHandler ~ ctx", ctx)
  const books = await getAllBooks()

  return books
}

async function getSingleBookHandler(parent, args) {
  const { title } = args

  const book = await getSingleBook(title)

  return book
}

async function addBookHandler(parent, args, context) {
  const { title, author, type } = args.input

  if (!context.currentUser) {
    throw new Error('You must be logged in to add a book')
  }

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
