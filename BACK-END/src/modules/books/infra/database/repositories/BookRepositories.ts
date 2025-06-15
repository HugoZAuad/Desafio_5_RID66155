import { AppDataSource } from '@config/database'
import { livros } from '@modules/books/infra/database/entities/Book'

export const booksRepositories = AppDataSource.getRepository(livros).extend({
  async findByName(titulo: string): Promise<livros | null> {
    return this.findOneBy({titulo})
  }
})

