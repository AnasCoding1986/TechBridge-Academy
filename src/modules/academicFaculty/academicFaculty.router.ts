import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/craete-academic-faculty',
  validateRequest(
    academicFacultyValidation.craeteAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.craeteAcadicFaculty,
);

router.get(
    '/',
    AcademicFacultyControllers.getAllAcademicFaculties
);

router.get(
    '/:facultyId',
    AcademicFacultyControllers.getSingleAcademicFaculty
);

router.patch(
    '/:facultyId',
    validateRequest(
        academicFacultyValidation.updateAcademicFacultyValidationSchema,
      ),
    AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
