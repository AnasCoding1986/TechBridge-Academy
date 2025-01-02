import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.router';
import { studentRoutes } from '../modules/student/student.router';
import { academicSemisterRoutes } from '../modules/academicSemister/academicSemester.router';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.router';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-semister',
    route: academicSemisterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

// http://localhost:5000/api/v1/students/create-student

// {
//   "password": "ami1244",
//   "student": {
//     "id": "S2024001",
//     "user": "6765888e47eab030835008fa",
//     "name": {
//       "firstName": "John",
//       "middleName": "A.",
//       "lastName": "Doe"
//     },
//     "gender": "male",
//     "dateofBirth": "2000-05-15",
//     "email": "john.doe@example.com",
//     "contactNo": "+8801234567890",
//     "emergencyContactNo": "+8809876543210",
//     "bloodGroup": "O+",
//     "presentAddress": "123 Main Street, Dhaka, Bangladesh",
//     "permanentAddress": "456 Elm Street, Sylhet, Bangladesh",
//     "guardian": {
//       "fatherName": "Michael Doe",
//       "fatherOccupation": "Businessman",
//       "fatherContactNo": "+8801112233445",
//       "motherName": "Emily Doe",
//       "motherOccupation": "Teacher",
//       "motherContactNo": "+8801223344556"
//     },
//     "localGuardian": {
//       "name": "Robert Smith",
//       "occupation": "Engineer",
//       "contactNo": "+8809876543211",
//       "address": "789 Pine Street, Chattogram, Bangladesh"
//     },
//     "profileImg": "https://example.com/images/john-doe-profile.jpg",
//     "admissionSemister": "6765888e47eab030835008fa",
//     "isDeleted": false
//   }
// }

