import express from 'express';
import { academicSemisterController } from './academicSemister.controller';

const router = express.Router();

router.post('/create-academic-semister',academicSemisterController.createAcademicSemister);

const academicSemisterRoutes = router;
