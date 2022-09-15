const { gql } = require('apollo-server-express')

const typeDefs = gql`

  enum BookType {
    EBOOK
    PAPERBACK
    HARDCOVER
  }

  # This "CreateBookInput" type can be used in other type declarations.
  input CreateBookInput {
    title: String!
    author: String!
    type: BookType!
  }

  # This "Book" type can be used in other type declarations.
  type Book {
    "The Id of the book"
    _id: ID!

    "The title of the book"
    title: String!

    "The author of the book"
    author: String!

    "The type of the book"
    type: BookType!

    "The date the book was created"
    createdAt: String

    "The date the book was last updated"
    updatedAt: String
  }

  type Customer {
    _id: ID!
    name: String!
    username: ID!
    password: String!

    "The date the Customer was created"
    createdAt: String!

    "The date the Customer was last updated"
    updatedAt: String!
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

module.exports = typeDefs
