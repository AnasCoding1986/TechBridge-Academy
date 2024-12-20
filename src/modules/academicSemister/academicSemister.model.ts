import { Schema } from "mongoose";
import { TAcademicSemister } from "./academicSemister.interface";
import { string } from "zod";

const academicSemisterSchema = new Schema<TAcademicSemister>({
    name:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
    year:{
        type:Date,
        required:true,
    },
    startMonth:{
        
    }
})