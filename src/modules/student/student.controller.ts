import { Name } from './student.interface';
import { z } from 'zod';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import studentZvalidationSchema from './student.zod.validation';
import { error } from 'console';
import sendResponse from '../../utils/sendResponse';
import HttpStatus from 'http-status';

const getAllStudents:RequestHandler = async (req, res, next) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    sendResponse(res,{
      statusCode:HttpStatus.OK,
      success:true,
      messagw:'student is created successfully with clean code',
      data:result
    })
  } catch (error) {
    next(error)
  }
};

const getSingleStudent:RequestHandler = async (req, res, next) => {
  try {
    const { studentID } = req.params;

    const result = await studentServices.getSingleStudentDB(studentID);
    
    sendResponse(res,{
      statusCode:HttpStatus.OK,
      success:true,
      messagw:'student is retribed successfully with clean code',
      data:result
    })
  } catch (error) {
    next(error)
  }
};

const deleteStudent:RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const result = await studentServices.deleteStudentDB(studentId);

    sendResponse(res,{
      statusCode:HttpStatus.OK,
      success:true,
      messagw:'student is deleted successfully with clean code',
      data:result
    })
  } catch (error) {
    next(error)
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
