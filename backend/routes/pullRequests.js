const express = require("express");
const router = express.Router();
const PullRequest = require("../models/PullRequest");

// Get all pull requests
router.get("/", async (req, res) => {
  try {
    const pullRequests = await PullRequest.find();
    res.json(pullRequests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a pull request
router.post("/", async (req, res) => {
  const { title, description, requesterId } = req.body;
  const newPR = new PullRequest({ title, description, requesterId });
  try {
    const savedPR = await newPR.save();
    res.status(201).json(savedPR);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;