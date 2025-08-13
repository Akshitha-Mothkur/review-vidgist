import { db, firestore } from './db.js'; // Adjust path as needed
import { v4 as uuidv4 } from 'uuid';

/**
 * Logs user interaction with a video feature into the Firestore 'analytics' collection.
 *
 * @param {string} userId - Unique identifier for the user.
 * @param {string} videoId - Unique identifier for the video.
 * @param {string} action - Type of interaction (e.g., 'viewed', 'asked_doubt', 'liked_summary').
 * @param {Object} metadata - Optional metadata like summaryId or doubtId.
 * @returns {Promise<boolean>} - Resolves to true if logging succeeds.
 */
export async function logFeatureUsage(userId, videoId, action, metadata = {}) {
  const allowedKeys = ['summary_id', 'doubt_id'];
  const cleanMetadata = Object.fromEntries(
    Object.entries(metadata).filter(([key]) => allowedKeys.includes(key))
  );

  const docRef = db.collection('analytics').doc();

  await docRef.set({
    history_id: uuidv4(),
    user_id: userId,
    video_id: videoId,
    action: action,
    metadata: cleanMetadata,
    timestamp: firestore.FieldValue.serverTimestamp()
  });

  return true;
}
