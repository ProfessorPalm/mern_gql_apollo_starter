import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model("book", bookSchema);

module.exports = {
  Book
};
