export interface IDeleteBookService {
  execute(id: number): Promise<boolean>;
}
