import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Property } from './entities/Property';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 9876,
  username: 'postgres',
  password: 'lessi10',
  database: 'real-state',
  entities: [Property],
  synchronize: true,
  logging: true,
  migrations: [__dirname + '/../**/**/migrations/*{.ts,.js}'],
  subscribers: [],
});
