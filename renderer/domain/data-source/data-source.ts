import 'reflect-metadata';
import { DataSource, Migration } from 'typeorm';
import { Amenities } from './entities/Amenities';
import { Lease } from './entities/Lease';
import { Property } from './entities/Property';
import { Sell } from './entities/Sell';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'teste123',
  database: 'real-state',
  entities: [Property, Lease, Sell, Amenities],
  synchronize: true,
  logging: true,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  subscribers: [],
});
