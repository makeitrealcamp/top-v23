import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  enum Category {
    VIDEO
    BLOG_POST
    PODCAST
    WEB
  }

  type Link {
    id: ID!
    title: String!
    description: String!
    url: String!
    category: Category!
    imageUrl: String!
  }

  type Query {
    link(id: String!): Link!
    links: [Link]
  }

  type Mutation {
    createLink(category: String!, description: String!, imageUrl: String!, title: String!, url: String!): Link!
    deleteLink(id: String!): Link!
    updateLink(category: String, description: String, id: String, imageUrl: String, title: String, url: String): Link!
  }
`

export default typeDefs
