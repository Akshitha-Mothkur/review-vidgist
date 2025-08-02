from db import db

def log_user_summary(user_id, video_id, summary, transcript, language):
    doc_ref = db.collection("summaries").document(f"{user_id}_{video_id}")
    doc_ref.set({
        "user_id": user_id,
        "video_id": video_id,
        "summary": summary,
        "transcript": transcript,
        "language": language
    })
    return True
