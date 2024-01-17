import express from 'express';
import user from './user.route';
const router = express.Router();

export default (): express.Router => {
  user(router);
  return router;
};
