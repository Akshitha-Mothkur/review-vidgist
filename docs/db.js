// docs/db.js
import admin from 'firebase-admin';
import serviceAccount from './reviewvidgist-firebase-adminsdk-fbsvc-7eb187d2ed.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Wrap the FieldValue API so your analytics.js & questions.js can still call:
//    firestore.FieldValue.serverTimestamp()
const firestore = {
  FieldValue: {
    serverTimestamp: admin.firestore.FieldValue.serverTimestamp
  }
};

export { db, firestore };
