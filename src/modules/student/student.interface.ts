import { Model, Types } from 'mongoose';

export type Name = {
  firstName: string;
  middleName?: string; // Made optional to align with typical use cases
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string; // Fixed typo: corrected "conactNo" to "contactNo"
  address: string;
};

export type IStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: Name;
  gender: 'male' | 'female';
  dateofBirth?: Date; // Optional field
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; // Optional field
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string; // Optional field for profile image
  isDeleted: boolean;
};

export type studentMethods = {
  isUserExists(id: string): Promise<IStudent | null>;
};

export type StudentModel = Model<
  IStudent,
  Record<string, never>,
  studentMethods
>;
