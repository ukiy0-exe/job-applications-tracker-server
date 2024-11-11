import Job from "../models/Jobs.js";

// get all job applications
export const getAllJobApplications = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
};

// create new job application
export const createJobApplication = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(200).json(newJob);
  } catch (error) {
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
};

// update job application
export const updateJobApplication = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedJob) {
      return res.status(404).json({ error: "Job application not found" });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
};

// delete job application
export const deleteJobApplication = async (req, res) => {
  try {
    const jobToDelete = await Job.findByIdAndDelete(req.params.id);
    if (!jobToDelete) {
      return res.status(404).json({ error: "Job application not found" });
    }
    res.status(200).json({ message: "Job application deleted 🤔" });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
};
