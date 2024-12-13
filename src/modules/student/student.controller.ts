import { Name } from './student.interface';
import { z } from 'zod';
import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentZvalidationSchema from './student.zod.validation';
import { error } from 'console';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'All studends data retribe dsuccessfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something wrong',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;

    const result = await studentServices.getSingleStudentDB(studentID);

    res.status(200).json({
      success: true,
      message: 'Single Student data retribed successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something wrong',
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await studentServices.deleteStudentDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
