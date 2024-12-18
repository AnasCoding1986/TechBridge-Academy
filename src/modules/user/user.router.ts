import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { log } from 'console';

const router = express.Router();

const shenabahini = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    
  console.log('I am a shenabahini');
  next();
};

router.post('/create-student', shenabahini, UserControllers.createStudent);

export const UserRoutes = router;
