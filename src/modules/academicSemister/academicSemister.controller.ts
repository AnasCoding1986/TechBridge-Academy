import { RequestHandler } from 'express';
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

const getAllAcademicSemister: RequestHandler = catchAsync(async (req, res) => {
  const result = await academicServices.getAllAcademicSemisterFromDB();

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'AcademicSemister retrived successfully with clean code',
    data: result,
  });
});

const getSingleAcademicSemister: RequestHandler = catchAsync(async (req, res) => {
  const { academicSemisterID } = req.params;

  const result = await academicServices.getSingleAcademicSemisterFromDB(academicSemisterID);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'student is retribed successfully with clean code',
    data: result,
  });
});

const updateAcademicSemister: RequestHandler = catchAsync(async (req, res) => {
  const { academicSemisterID } = req.params;

  const result = await academicServices.updateAcademicSemisterFromDB(academicSemisterID,req.body);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'Academic semister updated successfully with clean code',
    data: result,
  });
});

export const academicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister
};
