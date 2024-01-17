import { Router } from 'express';
import { getAlluser, getOne } from '../controllers/user-controller';

export default (router: Router) => {
  router.get('/users', getAlluser);
  router.get('/users/:id', getOne);
};
