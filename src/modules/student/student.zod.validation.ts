import { z } from 'zod';

// Phone number validation regex for Bangladeshi numbers (+880XXXXXXXXXX)
const phoneNumberRegex = /^\+8801[3-9]\d{8}$/;

// Name Validation Schema
const nameZValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(20, { message: 'Max length allowed is 20 characters' })
    .refine(
      (value) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() === value,
      {
        message: 'First name must be in capitalize format',
      },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must contain only alphabets',
    }),
});

// Guardian Validation Schema
const guardianZValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .regex(phoneNumberRegex, { message: 'Invalid father contact number' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .regex(phoneNumberRegex, { message: 'Invalid mother contact number' }),
});

// Local Guardian Validation Schema
const localGuardianZValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .regex(phoneNumberRegex, { message: 'Invalid local guardian contact number' }),
  address: z.string().min(1, { message: 'Local guardian address is required' }),
});

// Student Validation Schema
const studentZvalidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, { message: 'Password can not be more than 20 characters' }),
    student: z.object({
      name: nameZValidationSchema,
      gender: z.enum(['male', 'female'], {
        errorMap: () => ({
          message: 'Gender must be either "male" or "female"',
        }),
      }),
      dateofBirth: z.string().optional(),
      email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email format' }),
      contactNo: z
        .string()
        .regex(phoneNumberRegex, { message: 'Invalid contact number' }),
      emergencyContactNo: z
        .string()
        .regex(phoneNumberRegex, { message: 'Invalid emergency contact number' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional()
        .refine((value) => value, {
          message: 'Blood group must be a valid type (e.g., "A+", "O-")',
        }),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: guardianZValidationSchema,
      localGuardian: localGuardianZValidationSchema,
      profileImg: z.string().optional(),
      admissionSemister: z
        .string()
        .min(1, { message: 'Admission semester is required' }),
    }),
  }),
});

export const studentZvalidations = {
  studentZvalidationSchema,
};
