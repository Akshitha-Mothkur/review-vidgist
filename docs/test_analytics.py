from analytics import log_feature_usage

# Test data
user_id = "test_user_001"
video_id = "test_vid_001"
feature = "TTS"
metadata = {"language": "en", "duration": "15s"}

# Run test
result = log_feature_usage(user_id, video_id, feature, metadata)
print("Analytics logged:", result)
