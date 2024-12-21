import {
  TAcademicSemister,
} from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';
import { academicSemisterNameCodeMapper } from './acadicSemister.const';

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {
  if (academicSemisterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semister code');
  }

  const result = await AcademicSemister.create(payload);
  return result;
};

export const academicServices = {
  createAcademicSemisterIntoDB,
};
