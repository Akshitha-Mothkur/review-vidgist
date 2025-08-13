// docs/db.js
import admin from 'firebase-admin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serviceAccount = require(
  '../reviewvidgist-firebase-adminsdk-fbsvc-7eb187d2ed.json'
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const firestore = {
  FieldValue: {
    serverTimestamp: admin.firestore.FieldValue.serverTimestamp
  }
};

export { db, firestore };
