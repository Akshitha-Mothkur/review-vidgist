import firebase_admin
from firebase_admin import credentials, firestore
# Load your service account key
cred = credentials.Certificate("reviewvidgist-firebase-adminsdk-fbsvc-7eb187d2ed.json")
# Initialize the app
firebase_admin.initialize_app(cred)
# Get Firestore client
db = firestore.client()
