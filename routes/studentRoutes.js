import express, { Router } from "express"
import studentController from "../controller/studentController.js"

const router = express.Router()

router.post("/add", studentController.add)

router.get("/:id", studentController.studentById);

router.get("/allStudent", studentController.allStudent)

router.delete("/deleteStudent/:id", studentController.deleteStudent)

router.patch("/update/:id", studentController.updateStudentData)

export default router