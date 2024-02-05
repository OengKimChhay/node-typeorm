import { Request } from 'express';
import dataSource from '../database/config/data-source';
import { User } from '../database/entity/User.entity';

const userRepository = dataSource.getRepository(User);

export const getAll = async (req: Request) => {
  try {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 20);
    const [data, totalCounts] = await userRepository
      .createQueryBuilder('users')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return {
      data,
      meta: {
        page,
        limit,
        totalCounts,
        pageCount: Math.ceil(totalCounts / limit)
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const find = async (id: string | any) => {
  try {
    return await userRepository.findOneByOrFail({ id });
  } catch (error) {
    console.log(error);
  }
};
