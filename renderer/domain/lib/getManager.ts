import { AppDataSource } from '../dataSource/data-source';

const connection = AppDataSource.initialize();
export const getManager = async () => {
  return (await connection).manager;
};
