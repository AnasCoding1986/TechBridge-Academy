import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import HttpStatus from 'http-status';
import { error } from 'console';
import catchAsync from '../../utils/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await UserService.createStudentIntoDB(password, student);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'User is created successfully with clean code',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
