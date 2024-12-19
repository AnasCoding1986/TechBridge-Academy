import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { log } from 'console';

const router = express.Router();

const validateRequest = (name:any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    console.log(`I am a shenabahini ${name}`);
    next();
  };
};

router.post('/create-student', validateRequest("name"), UserControllers.createStudent);

export const UserRoutes = router;
