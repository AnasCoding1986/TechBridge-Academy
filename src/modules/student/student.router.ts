import express from "express"
import { studentController } from "./student.controller"

const router = express.Router()

router.get('/', studentController.getAllStudents)

router.get('/:studentID', studentController.getSingleStudent)

router.delete('/:studentID', studentController.deleteStudent)

export const studentRoutes = router;