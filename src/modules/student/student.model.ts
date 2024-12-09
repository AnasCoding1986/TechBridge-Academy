import validator from 'validator';
import { Schema, model } from 'mongoose';
import { Guardian, IStudent, LocalGuardian, Name } from './student.interface';

// Name Schema
const nameSchema = new Schema<Name>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name cannot exceed 20 characters'],
    validate: {
      validator: function (value: string) {
        const formattedName =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return formattedName === value;
      },
      message: '{VALUE} is not in capitalized format',
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} must contain only letters',
    },
  },
});

// Guardian Schema
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father\'s name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father\'s occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father\'s contact number is required'],
    validate: {
      validator: (value: string) => validator.isMobilePhone(value, 'any'),
      message: '{VALUE} is not a valid phone number',
    },
  },
  motherName: {
    type: String,
    required: [true, 'Mother\'s name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother\'s occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother\'s contact number is required'],
    validate: {
      validator: (value: string) => validator.isMobilePhone(value, 'any'),
      message: '{VALUE} is not a valid phone number',
    },
  },
});

// Local Guardian Schema
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian\'s name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian\'s occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian\'s contact number is required'],
    validate: {
      validator: (value: string) => validator.isMobilePhone(value, 'any'),
      message: '{VALUE} is not a valid phone number',
    },
  },
  address: {
    type: String,
    required: [true, 'Local guardian\'s address is required'],
  },
});

// Student Schema
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
      type: String,
      validate: {
        validator: (value: string) => validator.isISO8601(value),
        message: '{VALUE} is not a valid date',
      },
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not a valid all from chat gpt email',
      },
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is required'],
      validate: {
        validator: (value: string) => validator.isMobilePhone(value, 'any'),
        message: '{VALUE} is not a valid phone number',
      },
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
      validate: {
        validator: (value: string) => validator.isMobilePhone(value, 'any'),
        message: '{VALUE} is not a valid phone number',
      },
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
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
      type: String,
      validate: {
        validator: (value: string) => validator.isURL(value),
        message: '{VALUE} is not a valid URL',
      },
    },
    isActive: {
      type: String,
      enum: {
        values: ['active', 'inActive'],
        message: '{VALUE} must be either "active" or "inActive"',
      },
      default: 'active',
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

// Export the model
export const Student = model<IStudent>('Student', studentSchema);
