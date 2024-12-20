import { model, Schema } from 'mongoose';
import { TAcademicSemister, TAcademicSemisterCode, TAcademicSemisterName, TMonth } from './academicSemister.interface';
import { string } from 'zod';

const months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterNames: TAcademicSemisterName[] = ['Autumn', 'Summer', 'Fall'];
export const academicSemesterCodes: TAcademicSemisterCode[] = ['01', '02', '03'];

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
      type: Date,
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
