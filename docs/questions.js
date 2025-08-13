import { db, firestore } from './db.js'; // Adjust path as needed

/**
 * Logs a user-submitted question and its answer into the Firestore 'questions' collection.
 *
 * @param {string} userId - Unique identifier for the user.
 * @param {string} videoId - Unique identifier for the video.
 * @param {string} question - The question asked by the user.
 * @param {string} answer - The answer provided to the user.
 * @param {string} language - Language of the question/answer (e.g., 'en', 'te').
 * @returns {Promise<boolean>} - Resolves to true if logging succeeds.
 */
export async function logUserQuestion(userId, videoId, question, answer, language) {
  const docRef = db.collection('questions').doc();

  await docRef.set({
    user_id: userId,
    video_id: videoId,
    question: question,
    answer: answer,
    language: language,
    timestamp: firestore.FieldValue.serverTimestamp()
  });

  return true;
}

