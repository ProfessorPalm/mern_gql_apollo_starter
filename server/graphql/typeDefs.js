export default `
  type Book {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(title: String!): Book
  }
`;
