import express from "express"
import studentController from "../controller/studentController.js"

const router = express.Router()

router.post("/add", studentController.add)

router.get("/allStudent", studentController.allStudent)

router.get("/:id", studentController.studentById)

router.delete("/deleteStudent/:id", studentController.deleteStudent)

router.patch("/update/:id", studentController.updateStudentData)

export default router