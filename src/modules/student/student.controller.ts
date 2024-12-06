import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const result = await studentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req:Request, res:Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();

    res.status(200).json({
      success:true,
      message:"All studends data retribe dsuccessfully",
      data:result
    })
  } catch (error) {
    console.log(error);
  }
}

export const studentController = {
    createStudent,
    getAllStudents
}
