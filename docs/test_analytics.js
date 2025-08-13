import { logFeatureUsage } from './analytics.js'; // Adjust path if needed

// Test data
const userId = "test_user_001";
const videoId = "test_vid_001";
const action = "TTS";
const metadata = {
  language: "en",
  duration: "15s"
};

// Run test
logFeatureUsage(userId, videoId, action, metadata)
  .then(result => {
    console.log("Analytics logged:", result);
  })
  .catch(error => {
    console.error("Error logging analytics:", error);
  });
