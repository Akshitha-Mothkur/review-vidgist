// Dummy logic for transcription
exports.transcribeAudio = async (req, res) => {
  try {
    const dummyTranscript = "This is a sample transcription from the video.";
    res.status(200).json({ transcript: dummyTranscript });
  } catch (error) {
    res.status(500).json({ error: "Transcription failed" });
  }
};
