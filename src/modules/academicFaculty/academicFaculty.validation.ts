import { z } from "zod";

const craeteAcademicFacultyValidationSchema = z.object({
    name:z.string({
        invalid_type_error:'Academic Faculty must be string',
    }),
});

const updateAcademicFacultyValidationSchema = z.object({
    name:z.string({
        invalid_type_error:'Academic Faculty must be string',
    }),
});

export const academicFacultyValidation = {
    craeteAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
}