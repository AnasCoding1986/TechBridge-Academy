import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import HttpStatus from 'http-status';

const createStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { password, student } = req.body;

    // const zParseData = studentZvalidationSchema.parse(student);

    const result = await UserService.createStudentIntoDB(password, student);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student created successfully',
    //   data: result,
    // });

    sendResponse(res,{
      statusCode:HttpStatus.OK,
      success:true,
      messagw:'User is created successfully with clean code',
      data:result
    })

  } catch (error) {
    next(error)
  }
};

export const UserControllers = {
  createStudent
}


