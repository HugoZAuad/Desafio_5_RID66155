import { livros } from "@modules/books/infra/database/entities/Book";
import { BookRepositories } from "@modules/books/infra/database/repositories/BookRepositories";
import AppError from '@shared/errors/AppErrors';

export class UpdateBook {
  private bookRepository: BookRepositories;

  constructor(bookRepository: BookRepositories) {
    this.bookRepository = bookRepository;
  }

  async execute(id: number, data: Partial<livros>): Promise<livros | null> {
    try {
      const updatedBook = await this.bookRepository.update(id, data);
      if (!updatedBook) {
        throw new AppError('Livro não encontrado para atualização.', 404);
      }
      return updatedBook;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Erro ao atualizar livro.', 500);
    }
  }
}