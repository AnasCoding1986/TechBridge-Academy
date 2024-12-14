import config from '../../app/config';
import { IStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, student: IStudent) => {
  if (!password) {
    password = config.default_pass as string;
  }

  const result = await User.create(student);
  return result;
};

export const UserService = {
  createStudentIntoDB,
};
