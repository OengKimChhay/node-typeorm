import { DataSourceOptions } from 'typeorm';
import { User } from '../entity/User.entity';
import { Post } from '../entity/Post.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Post],
  migrations: ['src/database/migrations/*.ts']
};
export default config;
