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

  // Find the admission semester
  const admissionSemister = await AcademicSemister.findById(payLoad.admissionSemister);

  // Handle the case where admissionSemister might be null
  if (!admissionSemister) {
    throw new Error(`Admission semester with ID ${payLoad.admissionSemister} not found.`);
  }

  // Generate student ID based on admissionSemister
  user.id = await generateStudentId(admissionSemister);

  // Set password (use provided or default password)
  user.password = password || (config.default_pass as string);

  // Create the user in the database
  const result = await User.create(user);

  // Check if the user was successfully created
  if (result && Object.keys(result).length) {
    payLoad.id = result.id;
    payLoad.user = result._id;

    // Create the student record in the database
    const newStudent = await Student.create(payLoad);
    return newStudent;
  } else {
    throw new Error('Failed to create user.');
  }
};

export const UserService = {
  createStudentIntoDB,
};
