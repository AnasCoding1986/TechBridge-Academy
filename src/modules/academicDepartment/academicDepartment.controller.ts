import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicDepartmentServices } from './academicDepartment.service';
import HttpStatus from 'http-status';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    messagw: 'Academic department created successfully',
    data: result,
  });
});

const getAllAcademicDepartments: RequestHandler = catchAsync(
  async (req, res) => {
    const result =
      await academicDepartmentServices.getGetAllAcademicDepartmentsFromDB();
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      messagw: 'Academic department retrived successfully',
      data: result,
    });
  },
);

const getSingleAcademicDepartemnt: RequestHandler = catchAsync(
  async (req, res) => {
    const { departmetId } = req.params;

    const result =
      await academicDepartmentServices.getSingleAcademicDepartmentFromDB(
        departmetId,
      );
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      messagw: 'Single Academic department retrived successfully',
      data: result,
    });
  },
);

const updateAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { departmetId } = req.params;
    const result =
      await academicDepartmentServices.updateAcademicDepartmentIntoDB(
        departmetId,
        req.body,
      );
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      messagw: 'Academic department updated successfully',
      data: result,
    });
  },
);

export const academicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getSingleAcademicDepartemnt,
    updateAcademicDepartment
}