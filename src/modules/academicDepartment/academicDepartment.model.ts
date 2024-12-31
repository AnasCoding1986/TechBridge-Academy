import { Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.inteface';
import { timeStamp } from 'console';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
