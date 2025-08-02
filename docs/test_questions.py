from questions import log_user_question

# Test data
user_id = "test_user_001"
video_id = "test_vid_001"
question = "What is LangChain?"
answer = "LangChain is a framework for building LLM-powered apps."
language = "en"

# Run test
result = log_user_question(user_id, video_id, question, answer, language)
print("Question logged:", result)

