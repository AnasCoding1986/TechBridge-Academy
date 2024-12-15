import { TUser } from './user.interface';

import config from '../../app/config';
import { IStudent } from '../student/student.interface';
import { User } from './user.model';
import { Student } from '../student/student.model';

const createStudentIntoDB = async (password: string, student: IStudent) => {
  const user: Partial<TUser> = {};
  user.role = 'student';
  user.id = '202412001';

  user.password = password || (config.default_pass as string);

  const result = await User.create(user);

  if (Object.keys(result).length) {
    student.id = result.id;
    student.user = result._id;

    const newStudent = await Student.create(student);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
