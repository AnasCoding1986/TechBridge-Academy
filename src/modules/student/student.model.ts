import { Schema, model } from 'mongoose';
import { Guardian, IStudent, LocalGuardian, Name } from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: { 
    type: String, 
    required: [true, 'First name is required'], 
    maxlength: 20,
  },
  middleName: { 
    type: String 
  },
  lastName: { 
    type: String, 
    required: [true, 'Last name is required'], 
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { 
    type: String, 
    required: [true, 'Father name is required'], 
  },
  fatherOccupation: { 
    type: String, 
    required: [true, 'Father occupation is required'], 
  },
  fatherContactNo: { 
    type: String, 
    required: [true, 'Father contact number is required'], 
  },
  motherName: { 
    type: String, 
    required: [true, 'Mother name is required'], 
  },
  motherOccupation: { 
    type: String, 
    required: [true, 'Mother occupation is required'], 
  },
  motherContactNo: { 
    type: String, 
    required: [true, 'Mother contact number is required'], 
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { 
    type: String, 
    required: [true, 'Local guardian name is required'], 
  },
  occupation: { 
    type: String, 
    required: [true, 'Local guardian occupation is required'], 
  },
  conactNo: { 
    type: String, 
    required: [true, 'Local guardian contact number is required'], 
  },
  address: { 
    type: String, 
    required: [true, 'Local guardian address is required'], 
  },
});

const studentSchema = new Schema<IStudent>(
  {
    id: { 
      type: String, 
      required: [true, 'Student ID is required'], 
      unique: true, 
    },
    name: {
      type: nameSchema,
      required: [true, 'Name is required'],
    },
    gender: { 
      type: String, 
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not valid. Gender must be either "male" or "female".',
      },
      required: [true, 'Gender is required'], 
    },
    dateofBirth: { 
      type: String 
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true, 
    },
    contactNo: { 
      type: String, 
      required: [true, 'Contact number is required'], 
    },
    emergencyContactNo: { 
      type: String, 
      required: [true, 'Emergency contact number is required'], 
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not valid. Blood group must be a valid type (e.g., "A+", "O-").',
      },
    },
    presentAddress: { 
      type: String, 
      required: [true, 'Present address is required'], 
    },
    permanentAddress: { 
      type: String, 
      required: [true, 'Permanent address is required'], 
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian details are required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian details are required'],
    },
    profileImg: { 
      type: String 
    },
    isActive: { 
      type: String, 
      enum: {
        values: ['active', 'inActive'],
        message: '{VALUE} is not valid. Status must be either "active" or "inActive".',
      },
      default: 'active',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Create and export the model
export const Student = model<IStudent>('Student', studentSchema);
