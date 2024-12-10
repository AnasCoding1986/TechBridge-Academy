import { z } from 'zod';

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
      }
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must contain only alphabets',
    }),
});

const guardianZValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }),
});

const localGuardianZValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is required' }),
  address: z.string().min(1, { message: 'Local guardian address is required' }),
});

const studentZvalidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required' }),
  password: z.string().max(20, { message: 'Password can not be more than 20 charecter' }),
  name: nameZValidationSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either "male" or "female"' }),
  }),
  dateofBirth: z.string().optional(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is required' }),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional()
    .refine((value) => value, {
      message: 'Blood group must be a valid type (e.g., "A+", "O-")',
    }),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianZValidationSchema,
  localGuardian: localGuardianZValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'inActive'], {
    errorMap: () => ({
      message: 'Status must be either "active" or "inActive"',
    }),
  }),
});

export default studentZvalidationSchema;
