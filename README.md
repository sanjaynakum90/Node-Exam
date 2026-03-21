# 📚 Student Management System (Node.js)

A simple RESTful API for managing student data built using **Node.js**, **Express**, and **MongoDB**. This project demonstrates a clean backend architecture using MVC pattern.

---

## 🚀 Features

* Create a new student
* Get all students
* Get a single student by ID
* Update student details
* Delete a student
* Centralized error handling
* Organized folder structure (MVC)

---

## 🏗️ Project Structure

```
NODE-EXAM/
│── config/
│   └── db.js              # Database connection
│
│── controller/
│   └── studentController.js  # Business logic
│
│── middleware/
│   └── HttpError.js      # Custom error handling
│
│── model/
│   └── Student.js        # Mongoose schema
│
│── routes/
│   └── studentRoutes.js  # API routes
│
│── .env                  # Environment variables
│── .gitignore
│── app.js                # Entry point
│── package.json
```

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/student-management.git
```

2. Navigate into the project

```bash
cd student-management
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server

```bash
npm start
```

---

## 🌐 API Endpoints

### 📌 Base URL

```
http://localhost:5000/api/students
```

### 🔹 Get All Students

```
GET /
```

### 🔹 Get Student by ID

```
GET /:id
```

### 🔹 Create Student

```
POST /
```

### 🔹 Update Student

```
PUT /:id
```

### 🔹 Delete Student

```
DELETE /:id
```

---

## 🧪 Example Request Body

```json
{
  "name": "John Doe",
  "age": 20,
  "course": "Computer Science"
}
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## 📌 Scripts

```bash
npm start       # Run server
npm run dev     # Run with nodemon (if configured)
```

---

## 📖 Future Improvements

* Add authentication (JWT)
* Add validation (Joi / express-validator)
* Pagination & filtering
* Unit testing

---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/your-username

---

## 📄 License

This project is licensed under the MIT License.

---
