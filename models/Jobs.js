import { application } from "express";
import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    company: {
      name: {
        type: String,
        required: true,
      },
      website: String,
      location: String,
    },
    position: {
      title: { type: String, required: true },
      type: {
        type: String,
        enum: ["full-time", "part-time", "internship"],
        default: "full-time",
      },
      salary: Number,
    },
    status: {
      type: String,
      enum: [
        "saved",
        "applied",
        "interviewing",
        "offered",
        "rejected",
        "accepted",
      ],
      default: "saved",
    },
    applicationDate: Date,
    source: String,
    description: String,
    notes: String,
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
