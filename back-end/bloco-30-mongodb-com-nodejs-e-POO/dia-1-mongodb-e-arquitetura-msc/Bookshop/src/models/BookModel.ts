import { model as createModel } from 'mongoose';
import IBook from '../interfaces/IBook';
import { BookSchema } from '../schemas/BookSchema';

export default class BookModel {
  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {};

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(bookData: object):Promise<IBook> {
    const book = await this.bookModel.create(bookData);
    return book;
  }

  public async getBook(id: string):Promise<IBook | null> {
    const book = await this.bookModel.findOne({ id });
    return book;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this.bookModel.findOneAndUpdate(
      { id },
      { ...bookData },
    );

    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findOneAndDelete({ id });
    return book;
  }
}