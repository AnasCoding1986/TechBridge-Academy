import { TAcademicSemister } from "../academicSemister/academicSemister.interface";

export const generateStudentId = (payLoad: TAcademicSemister) => {
    const currentId = (0).toString().padStart(4,"0");
    let incrementId = 
};