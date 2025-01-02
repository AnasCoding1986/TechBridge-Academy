import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicDepartmentServices } from "./academicDepartment.service";
import HttpStatus from 'http-status';

const createAcademicDepartment = catchAsync(async (req, res)=>{
    const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        success:true,
        messagw:'Academic department created successfully',
        data:result,
    })
})