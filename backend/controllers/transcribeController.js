const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Downloads audio from YouTube using yt-dlp
async function downloadAudioFromYouTube(youtubeUrl) {
  return new Promise((resolve, reject) => {
    const outputDir = path.join(__dirname, '..', 'uploads');
    const outputFileName = `${Date.now()}.mp3`;
    const outputPath = path.join(outputDir, outputFileName);

    const command = `yt-dlp -x --audio-format mp3 -o "${outputPath}" "${youtubeUrl}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) return reject(error);
      resolve(outputPath);  // Return the full path of the downloaded .mp3
    });
  });
}

// Transcribes audio using Whisper
async function runWhisper(filePath) {
  return new Promise((resolve, reject) => {
    const outputDir = path.join(__dirname, '..', 'uploads');

    // Build command
    const command = `whisper "${filePath}" --model tiny --output_format txt --output_dir "${outputDir}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) return reject(error);

      // Whisper saves as: uploads/filename.txt
      const baseName = path.basename(filePath, path.extname(filePath));
      const txtFilePath = path.join(outputDir, `${baseName}.txt`);

      // Check if file exists
      if (!fs.existsSync(txtFilePath)) {
        return reject(new Error(`Transcription file not found at: ${txtFilePath}`));
      }

      // Read and return transcript
      fs.readFile(txtFilePath, 'utf8', (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  });
}


module.exports = { runWhisper, downloadAudioFromYouTube };
