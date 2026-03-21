import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            if (!value.endsWith("@gmail.com")) {
                throw new Error("Email must be a Gmail address");
            }
        }

    },
    age: {
        type: Number,
        required: true,
        validate: (value) => {
            if (value <= 18 || value >= 60){
                throw new Error("student age is not valid");
            }
        }
    }
}, {
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

export default Student;