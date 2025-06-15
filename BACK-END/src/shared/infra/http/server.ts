import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import { AppDataSource } from '../../../config/database';
import BooksRoutes from '@modules/books/infra/http/routes/BooksRoutes';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida');
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });

app.use(cors());
app.use(express.json());


app.use('/livros', BooksRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API de Livros funcionando!');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message || 'Erro interno do servidor' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
