import { IDeleteBookService } from '../models/services/IDeleteBookService';
import { IBookRepository } from '../models/repositories/IBookRepository';
import AppError from '@shared/errors/AppErrors';

export class DeleteBook implements IDeleteBookService {
  private bookRepository: IBookRepository;

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(id: number): Promise<boolean> {
    try {
      const result = await this.bookRepository.delete(id);
      if (!result) {
        throw new AppError('Livro não encontrado para exclusão.', 404);
      }
      return result;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Erro ao deletar livro.', 500);
    }
  }
}