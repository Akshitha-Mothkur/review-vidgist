from db import db
from firebase_admin import firestore

def log_user_question(user_id, video_id, question, answer, language):
    doc_ref = db.collection("questions").document()
    doc_ref.set({
        "user_id": user_id,
        "video_id": video_id,
        "question": question,
        "answer": answer,
        "language": language,
        "timestamp": firestore.SERVER_TIMESTAMP
    })
    return True
