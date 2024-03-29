import express from "express";
import { isLoggedIn, isAdmin } from "../controllers/middleware.js";

import {
  getUsers,
  deleteUser,
  suspendUser,
} from "../controllers/adminUserControllers.js";

import {
  getReports,
  updateReportStatus,
  deleteReport,
  updateCategory,
} from "../controllers/adminContentControllers.js";

const router = express.Router();

// User Management Routes

router.get("/users", isLoggedIn, isAdmin, getUsers);
router.delete("/users/delete/:id", isLoggedIn, isAdmin, deleteUser);
router.put("/user/:userId/suspend", isLoggedIn, isAdmin, suspendUser);

// Content Moderation Routes

router.get("/reports", isLoggedIn, isAdmin, getReports);
router.put("/report/:reportId/status", isLoggedIn, isAdmin, updateReportStatus);
router.delete("/posts/:postId", isLoggedIn, isAdmin, deleteReport);
router.put("/posts/:postId/category", isLoggedIn, isAdmin, updateCategory);

export default router;
