const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { runWhisper } = require('../controllers/transcribeController');

// Store uploaded files in /uploads
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// POST /api/transcribe
router.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const transcript = await runWhisper(req.file.path);
    res.json({ transcript });
  } catch (err) {
    res.status(500).json({ error: 'Transcription failed' });
  }
});

module.exports = router;


router.post('/summarize', (req, res) => {
  const { transcript } = req.body;
  const summary = transcript.slice(0, 100) + '...'; // Simple fake summary
  res.json({ summary });
});
