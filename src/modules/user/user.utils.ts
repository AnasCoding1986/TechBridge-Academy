import { log } from 'console';
import { TAcademicSemister } from '../academicSemister/academicSemister.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort()
    .lean();

    return lastStudent?.id? lastStudent.id.substring(6) : undefined;
};

export const generateStudentId =async  (payLoad: TAcademicSemister) => {

  console.log(await findLastStudentId());
  

  // const currentId = (0).toString();
  // let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  // incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;

  // return incrementId;
};
