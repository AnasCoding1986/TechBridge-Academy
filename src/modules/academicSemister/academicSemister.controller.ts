import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createAcademicSemister = catchAsync(async(req,res)=>{



    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        messagw:'Academic semister craeted succcessfully',
        data: result,
    })
})

export const academicSemisterController = {
    createAcademicSemister
}