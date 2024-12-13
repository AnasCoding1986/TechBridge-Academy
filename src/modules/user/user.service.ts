import { User } from "./user.model";

const createStudentIntoDB = async (student: IStudent) => {
  // const result = await Student.create(student);
//   const studentInstanceMethod = new Student(student);

//   if (await studentInstanceMethod.isUserExists(student.id)) {
//     throw new Error('User for better already exists')
//   }
  
  const result = await User.create(student);
  return result;
};

export const UserService = {
    createStudentIntoDB
}