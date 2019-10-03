import { Book } from "../models/models";

export default {
  Query: {
    getBooks: async () => await Book.find({}).exec()
  },
  Mutation: {
    addBook: async (_, args) => {
      try {
        let response = await Book.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
    deleteBook: async (_, args) => {
      try {
        let response = await Book.deleteOne(args);
        return response;
      } catch (e) {
        return e.message;
      }
    }
  }
};
