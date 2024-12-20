import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicServices } from './academicSemister.service';
import HttpStatus from 'http-status';

const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicServices.createAcademicSemisterIntoDB(req.body);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'Academic semister craeted succcessfully',
    data: result,
  });
});

export const academicSemisterController = {
  createAcademicSemister,
};
