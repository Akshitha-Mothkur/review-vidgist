import { logUserQuestion } from './questions.js'; // Adjust path if needed

// Test data
const userId = "test_user_001";
const videoId = "test_vid_001";
const question = "What is LangChain?";
const answer = "LangChain is a framework for building LLM-powered apps.";
const language = "en";

// Run test
logUserQuestion(userId, videoId, question, answer, language)
  .then(result => {
    console.log("Question logged:", result);
  })
  .catch(error => {
    console.error("Error logging question:", error);
  });
