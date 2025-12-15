const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let courses = require("./data/db.json");

// GET all courses
app.get("/api/courses", (req, res) => {
    res.json(courses);
});

// GET course by id
app.get("/api/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const course = courses.find(c => c.cid === id);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
});

// CREATE new course
app.post("/api/courses", (req, res) => {
    const { cname, cdur } = req.body;

    if (!cname || !cdur) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const cid = courses.length
        ? courses[courses.length - 1].cid + 1
        : 1;

    const newCourse = { cid, cname, cdur };
    courses.push(newCourse);

    res.status(201).json(newCourse);
});

// UPDATE course
app.put("/api/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const { cname, cdur } = req.body;

    const course = courses.find(c => c.cid === id);
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    course.cname = cname ?? course.cname;
    course.cdur = cdur ?? course.cdur;

    res.json(course);
});

// DELETE course
app.delete("/api/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const initialLength = courses.length;

    courses = courses.filter(c => c.cid !== id);

    if (courses.length === initialLength) {
        return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted" });
});

// START SERVER
app.listen(PORT, () => {
    console.log(`SERVER RUNNING on http://localhost:${PORT}`);
});
