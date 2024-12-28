import { TUser } from './user.interface';

import config from '../../app/config';
import { IStudent } from '../student/student.interface';
import { User } from './user.model';
import { Student } from '../student/student.model';
import { TAcademicSemister } from '../academicSemister/academicSemister.interface';
import { AcademicSemister } from '../academicSemister/academicSemister.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payLoad: IStudent) => {
  const user: Partial<TUser> = {};
  user.role = 'student';

  const admisssionSemister = await AcademicSemister.findById(payLoad.admissionSemister)

  user.id = generateStudentId(admisssionSemister);

  user.password = password || (config.default_pass as string);

  const result = await User.create(user);

  if (Object.keys(result).length) {
    payLoad.id = result.id;
    payLoad.user = result._id;

    const newStudent = await Student.create(payLoad);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
