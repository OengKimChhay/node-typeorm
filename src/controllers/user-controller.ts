import { Request, Response } from 'express';
import { getAll, find } from '../services/user.service';

export const getAlluser = async (req: Request, res: Response) => {
  try {
    const users = await getAll(req);
    return res.status(200).json(users);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const users = await find(req.params.id);
    return res.status(200).json(users);
  } catch (error) {
    return res.sendStatus(400);
  }
};
