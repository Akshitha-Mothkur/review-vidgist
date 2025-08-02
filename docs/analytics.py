from db import db
from firebase_admin import firestore

def log_feature_usage(user_id, video_id, feature, metadata=None):
    doc_ref = db.collection("analytics").document()
    doc_ref.set({
        "user_id": user_id,
        "video_id": video_id,
        "feature": feature,  
        "metadata": metadata or {},
        "timestamp": firestore.SERVER_TIMESTAMP
    })
    return True
