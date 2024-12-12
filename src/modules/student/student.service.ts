import { error } from 'console';
import { IStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (student: IStudent) => {
  // const result = await Student.create(student);
  const studentInstanceMethod = new Student(student);

  if (await studentInstanceMethod.isUserExists(student.id)) {
    throw new Error('User for better already exists')
  }
  
  const result = await studentInstanceMethod.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{$match:{id}}]);
  return result;
};

const deleteStudentDB = async (id: string) => {
  const result = await Student.updateOne({ id },{isDeleted:true});
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentDB,
  deleteStudentDB
};
