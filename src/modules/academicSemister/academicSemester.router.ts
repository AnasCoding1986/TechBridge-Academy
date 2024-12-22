import express from 'express';
import { academicSemisterController } from './academicSemister.controller';
import validateRequest from '../../utils/validateRequest';
import { academicSemisterValidations } from './academicSemister.zod.validation';

const router = express.Router();

router.post('/create-academic-semister',validateRequest(academicSemisterValidations.createAcademicSemisterValidationSchema),academicSemisterController.createAcademicSemister);

// router.get('/', academicSemisterController.)

// router.get('/:studentID', studentController.getSingleStudent)

// router.delete('/:studentID', studentController.deleteStudent)

export const academicSemisterRoutes = router;
