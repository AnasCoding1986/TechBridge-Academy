import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicServices } from './academicSemister.service';

const createAcademicSemister = catchAsync(async (req, res) => {
  const result = await academicServices.createAcademicSemisterIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    messagw: 'Academic semister craeted succcessfully',
    data: result,
  });
});

export const academicSemisterController = {
  createAcademicSemister,
};
