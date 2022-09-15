const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    type: "EBOOK",
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    type: "HARDCOVER"
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    type: "PAPERBACK"
  }
]

const typeDefs = gql`

  enum BookType {
    EBOOK
    PAPERBACK
    HARDCOVER
  }

  input CreateBookInput {
    title: String!
    author: String!
    type: BookType!
  }

  # This "Book" type can be used in other type declarations.
  type Book {
    "The title of the book"
    title: String!

    "The author of the book"
    author: String!

    "The type of the book"
    type: BookType!
  }

  type Query {
    "A simple type for getting started!"
    hello: String!

    "Get all books"
    allBooks: [Book]

    "Get a book by title"
    singleBook(title: String!): Book
  }

  type Mutation {
    "Add a book"
    addBook(input: CreateBookInput!): Book!
    # addBook(title: String!, author: String!, type: BookType!): Book
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!',

    allBooks: () => books,

    singleBook: (parent, args) => {
      const { title } = args

      return books.find(book => book.title === title)
    }
  },

  Mutation: {
    addBook: (parent, args) => {
      const { title, author, type } = args.input

      const book = {
        title,
        author,
        type
      }

      books.push(book)

      return book
    }
  }
}

async function start() {
  const app = express()

  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apollo.start()
  apollo.applyMiddleware({ app })

  app.use('/api/books', (req, res) => {
    res.json(books)
  })

  app.listen(8080, async () => {
    console.log('Server is running on port 8080')
  })

}

start()
