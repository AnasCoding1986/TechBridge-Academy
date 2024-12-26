import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemister.model';
import { academicSemisterNameCodeMapper } from './acadicSemister.const';

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {
  if (academicSemisterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semister code');
  }

  const result = await AcademicSemister.create(payload);
  return result;
};

const getAllAcademicSemisterFromDB = async () => {
  const result = await AcademicSemister.find();
  return result;
};

const getSingleAcademicSemisterFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await AcademicSemister.aggregate([{ $match: { id } }]);
  return result;
};

const updateAcademicSemisterFromDB = async (
  id: string,
  payload: Partial<TAcademicSemister>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemisterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid semister code');
  }
  const result = await AcademicSemister.findOneAndUpdate({ _id:id }, payload,{
    new:true,
  });
  return result;
};

export const academicServices = {
  createAcademicSemisterIntoDB,
  getAllAcademicSemisterFromDB,
  getSingleAcademicSemisterFromDB,
  updateAcademicSemisterFromDB,
};
