import { Schema, model, models } from "mongoose";

interface IBook {
  title: string;
  author: string;
  pageNumber: number;
  ISBN: string;
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  pageNumber: {
    type: Number,
    required: [true, "Number of pages is required"],
  },
  ISBN: {
    type: String,
    required: [true, "ISBN number is required"],
  },
});

const Book = models.Book || model<IBook>("Book", bookSchema);

export default Book;
