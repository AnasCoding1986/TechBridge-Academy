import { model, Schema } from 'mongoose';
import { TAcademicSemister } from './academicSemister.interface';
import { string } from 'zod';
import { academicSemesterCodes, academicSemesterNames, months } from './acadicSemister.const';

const academicSemisterSchema = new Schema<TAcademicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum:academicSemesterNames,
    },
    code: {
      type: String,
      required: true,
      enum:academicSemesterCodes,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemister = model<TAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
