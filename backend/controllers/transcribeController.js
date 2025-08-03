const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runWhisper(filePath) {
  return new Promise((resolve, reject) => {
    const outputDir = path.dirname(filePath);
    const command = `whisper "${filePath}" --model base --output_dir ${outputDir} --output_format txt`;

    exec(command, (error, stdout, stderr) => {
      if (error) return reject(error);

      const txtFilePath = filePath.replace(path.extname(filePath), '.txt');
      fs.readFile(txtFilePath, 'utf8', (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  });
}

module.exports = { runWhisper };
