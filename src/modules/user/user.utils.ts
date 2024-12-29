import { TAcademicSemister } from '../academicSemister/academicSemister.interface';

export const generateStudentId = (payLoad: TAcademicSemister) => {
  const currentId = (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;

  return incrementId;
};
