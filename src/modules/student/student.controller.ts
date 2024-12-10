import { Name } from './student.interface';
import { z } from 'zod';
import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentZvalidationSchema from './student.zod.validation';
import { error } from 'console';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const zParseData = studentZvalidationSchema.parse(student);

    const result = await studentServices.createStudentIntoDB(zParseData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'All studends data retribe dsuccessfully',
      data: result,
    });
  } catch (error) {
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
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
