import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.inteface';
import { timeStamp } from 'console';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty:{
        type:Schema.ObjectId,
        ref:'AcademicFaculty',
    }
  },
  {
    timestamps: true,
  },
);

export const AcademicDepart = model<TAcademicDepartment>(
    'AcademicDepart',
    academicDepartmentSchema,
);
