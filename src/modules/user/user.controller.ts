import { Request, Response } from 'express';
import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;

    // const zParseData = studentZvalidationSchema.parse(student);

    const result = await UserService.createStudentIntoDB(password, student);

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

export const UserControllers = {
  createStudent
}


