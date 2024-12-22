import { Name } from './student.interface';
import { z } from 'zod';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import { error } from 'console';
import sendResponse from '../../utils/sendResponse';
import HttpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'student is created successfully with clean code',
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentID } = req.params;

  const result = await studentServices.getSingleStudentDB(studentID);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'student is retribed successfully with clean code',
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const result = await studentServices.deleteStudentDB(studentId);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'student is deleted successfully with clean code',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
