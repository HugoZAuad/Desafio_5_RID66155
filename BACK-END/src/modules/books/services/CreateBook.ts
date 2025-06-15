import { ICreateBookService } from '../models/services/ICreateBookService';
import { ICreateBook } from '../models/interfaces/ICreateBook';
import { IBook } from '../models/interfaces/IBook';
import { IBookRepository } from '../models/repositories/IBookRepository';
import AppError from '@shared/errors/AppErrors';

export class CreateBook implements ICreateBookService {
  private bookRepository: IBookRepository;

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(data: ICreateBook): Promise<IBook> {
    try {
      const book = await this.bookRepository.create(data);
      return book;
    } catch (error) {
      throw new AppError('Erro ao criar livro.', 500);
    }
  }
}