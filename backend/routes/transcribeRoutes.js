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
const { downloadAudioFromYouTube } = require('../controllers/transcribeController');

// POST /api/youtube-to-transcript
router.post('/youtube-to-transcript', async (req, res) => {
  console.log("📩 POST /youtube-to-transcript hit");

  const { youtubeUrl } = req.body;
  console.log("🎥 YouTube URL:", youtubeUrl);

  try {
    const audioPath = await downloadAudioFromYouTube(youtubeUrl);
    const transcript = await runWhisper(audioPath);
    res.json({ transcript });
  } catch (error) {
    console.error("❌ Error processing video:", error);
    res.status(500).json({ error: 'Failed to process YouTube video' });
  }
});

// POST /api/transcribe
router.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const transcript = await runWhisper(req.file.path);
    res.json({ transcript });
  } catch (err) {
    res.status(500).json({ error: 'Transcription failed' });
  }
});




router.post('/summarize', (req, res) => {
  const { transcript } = req.body;
  const summary = transcript.slice(0, 100) + '...'; // Simple fake summary
  res.json({ summary });
});
module.exports = router;