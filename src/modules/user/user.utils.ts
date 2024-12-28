import { TAcademicSemister } from '../academicSemister/academicSemister.interface';

export const generateStudentId = (payLoad: TAcademicSemister) => {
  const currentId = (0).toString().padStart(4, '0');
  let incrementId = (Number(currentId) + 1).toString();
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;

  return incrementId;
};
