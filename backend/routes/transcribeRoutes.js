const express = require("express");
const router = express.Router();
const { transcribeAudio } = require("../controllers/transcribeController");

router.post("/", transcribeAudio);

module.exports = router;

