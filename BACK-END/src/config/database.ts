import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5433,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'livrosdb',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../modules/books/infra/database/entities/*.ts'],
  migrations: [__dirname + '/../shared/infra/typeorm/migrations/*.ts'],
  subscribers: [],
});
