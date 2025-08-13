

const db = require('./db.js');

function logUserSummary(userId, videoId, summary, transcript, language) {
  const docRef = db.collection('summaries').doc(`${userId}_${videoId}`);

  return docRef.set({
    user_id: userId,
    video_id: videoId,
    summary: summary,
    transcript: transcript,
    language: language
  })
  .then(() => true)
  .catch((error) => {
    console.error('Error writing document:', error);
    return false;
  });
}

module.exports = { logUserSummary };

