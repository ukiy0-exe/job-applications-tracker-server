import express from "express";
import {
  getAllJobApplications,
  createJobApplication,
  updateJobApplication,
} from "../controllers/jobControllers.js";

const router = express.Router();

router.get("/", getAllJobApplications);
router.post("/", createJobApplication);
router.patch("/:id", updateJobApplication);

export default router;
