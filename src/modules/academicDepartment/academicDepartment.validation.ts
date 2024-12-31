import { z } from "zod";

const craeteAcademicDepartmentValidationSchema = z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:'Academic Department must be strong',
            required_error:'Name is rewuired'
        })
    }),
    academicFaculty:z.string({
        invalid_type_error:'Academic Faculty must be string',
        required_error:'Faculty is required'
    })
})

const updateAcademicDepartmentValidationSchema = z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:'Academic Department must be strong',
            required_error:'Name is rewuired'
        })
    }).optional(),
    academicFaculty:z.string({
        invalid_type_error:'Academic Faculty must be string',
        required_error:'Faculty is required'
    }).optional(),
})

export const AcademicDepartmentValidation = {
    craeteAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
}