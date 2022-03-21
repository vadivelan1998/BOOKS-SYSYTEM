const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, required: true, default: 0 }, //(integer, minimum default is 0)
    coverImage: { type: String, required: true }, //(string, required and it can be 1 only)
    content: { type: String, required: true },
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true} //( string, required)
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Book = mongoose.model("book", bookSchema);
module.exports = Book;
