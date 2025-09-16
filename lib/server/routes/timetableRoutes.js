import express from "express";
import { getTeacherTimetable, addTimetableEntry, deleteTimetableEntry, getStudentTimetable } from "../controllers/timetableController.js"
import { protect, teacherOnly, studentOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route for students to get their timetable
router.get("/student", protect, studentOnly, getStudentTimetable);

// The existing teacher-only routes remain unchanged
router.get("/teacher", protect, teacherOnly, getTeacherTimetable);
router.post("/", protect, teacherOnly, addTimetableEntry);
router.delete("/:entryId", protect, teacherOnly, deleteTimetableEntry);

export default router;