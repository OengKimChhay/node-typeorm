import express from 'express';
import { User } from './database/entity/User.entity';
import dataSource from './database/config/data-source';

const myDataSource = dataSource.getRepository(User);
const user = async () => await myDataSource.createQueryBuilder().getMany();

const app = express();

app.listen(4000, () => console.log(user(), 'Server started on port 4000'));
