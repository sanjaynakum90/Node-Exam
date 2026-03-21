import express from "express";
import dotenv from "dotenv"
dotenv.config({ path: "./.env" })


import connectDB from "./config/db.js";
import HttpError from "./middleware/HttpError.js";
import studentRoutes from "./routes/studentRoutes.js";


const app = express();


app.use(express.json());

app.use("/Student", studentRoutes);


app.get("/", (req, res) => {
    res.status(200).json("hello from server");
});

app.use((req, res, next) => {
    next(new HttpError("route not found", 404));
});

app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({ message: error.message || "internal server error" });
});

async function startServer() {
    try {
        await connectDB();

        const port = process.env.PORT || 5000


        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log("fail to start server:", error.message);
        process.exit(1);
    }
}

startServer();