import Student from "../model/Student.js";
import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
    try {
        const { name, email, age } = req.body;

        const newStudent = { name, email, age }

        const studentDetails = new Student(newStudent)

        await studentDetails.save()

        res.status(201).json({ message: "student added successfully", studentDetails })
    } catch (error) {
        next(new HttpError(error.message))
    }
}
const allStudent = async (req, res, next) => {
    try {
        const studentList = await Student.find({});

        if (!studentList.length) {
            return next(new HttpError("no student data found", 404));
        }

        res
            .status(200)
            .json({ message: "student data received successfully", studentList });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};



const studentById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const student = await Student.findById(id);

        if (!student) {
            return next(new HttpError("student not found with this id", 404));
        }

        res.status(200).json({ message: "student found", student });
    } catch (error) {
        next(new HttpError("invalid student id", 400));
    }
};

const deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return next(new HttpError("student not found", 404));
        }

        res.status(200).json({ message: "student data deleted successfully" });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};


const updateStudentData = async (req, res, next) => {
    try {
        const id = req.params.id;

        const existingStudent = await StudentModel.findById(id);

        if (!existingStudent) {
            return next(new HttpError("student id not found", 404));
        }

        const updates = Object.keys(req.body);

        const allowedUpdates = ["name", "age"];

        const isValidUpdates = updates.every((field) => {
            return allowedUpdates.includes(field);
        });

        if (!isValidUpdates) {
            return next(new HttpError("only allowed field can be updated", 400));
        }

        updates.forEach((update) => {
            existingStudent[update] = req.body[update];
        });

        await existingStudent.save();

        res
            .status(200)
            .json({ message: "student data updated successfully", existingStudent });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};



export default { add, studentById, allStudent, deleteStudent, updateStudentData }