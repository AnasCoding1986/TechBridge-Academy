import { Name } from './student.interface';
import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import studentZvalidationSchema from './student.zod.validation';
import { error } from 'console';
import sendResponse from '../../utils/sendResponse';
import HttpStatus from 'http-status';

const getAllStudents = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    // res.status(200).json({
    //   success: true,
    //   message: 'All studends data retribe dsuccessfully',
    //   data: result,
    // });

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

const getSingleStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentID } = req.params;

    const result = await studentServices.getSingleStudentDB(studentID);

    // res.status(200).json({
    //   success: true,
    //   message: 'Single Student data retribed successfully',
    //   data: result,
    // });
    
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

const deleteStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;

    const result = await studentServices.deleteStudentDB(studentId);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is deleted successfully',
    //   data: result,
    // });

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
