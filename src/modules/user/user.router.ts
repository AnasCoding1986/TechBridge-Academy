import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { log } from 'console';
import { AnyZodObject } from 'zod';
import { studentZvalidations } from '../student/student.zod.validation';
import validateRequest from '../../utils/validateRequest';

const router = express.Router();

router.post('/create-student', validateRequest(studentZvalidations.studentZvalidationSchema), UserControllers.createStudent);

export const UserRoutes = router;
