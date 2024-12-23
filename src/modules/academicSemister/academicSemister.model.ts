import { model, Schema } from 'mongoose';
import { TAcademicSemister } from './academicSemister.interface';
import { string } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterNames,
  months,
} from './acadicSemister.const';

const academicSemisterSchema = new Schema<TAcademicSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterNames,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
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

academicSemisterSchema.pre('save', async function (next) {
  const isSemisterExists = await AcademicSemister.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemisterExists) {
    throw new Error('Semister is for continuation already exists')
  };

  next()
});

export const AcademicSemister = model<TAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
