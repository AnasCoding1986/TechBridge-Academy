import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../utils/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/craete-academic-department',
  validateRequest(
    AcademicDepartmentValidation.craeteAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.createAcademicDepartment,
);

router.get('/', academicDepartmentController.getAllAcademicDepartments);

router.get(
  '/:departmentId',
  academicDepartmentController.getSingleAcademicDepartemnt,
);

router.patch(
  '/',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const academicDepartmentRoutes = router;
