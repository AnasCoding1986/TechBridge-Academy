import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterNames,
  months,
} from './acadicSemister.const';

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterNames] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const academicSemisterValidations={
  createAcademicSemisterValidationSchema
}