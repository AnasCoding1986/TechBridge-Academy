import express from 'express';
import { academicSemisterController } from './academicSemister.controller';
import validateRequest from '../../utils/validateRequest';
import { academicSemisterValidations } from './academicSemister.zod.validation';

const router = express.Router();

router.post('/create-academic-semister',validateRequest(academicSemisterValidations.createAcademicSemisterValidationSchema),academicSemisterController.createAcademicSemister);

router.get('/', academicSemisterController.getAllAcademicSemister)

router.get('/:academicSemisterID', academicSemisterController.getSingleAcademicSemister)

router.patch('/:academicSemisterID', validateRequest(academicSemisterValidations.updateAcademicSemisterValidationSchema), academicSemisterController.getSingleAcademicSemister)

// router.delete('/:studentID', studentController.deleteStudent)

export const academicSemisterRoutes = router;
