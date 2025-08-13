// docs/db.js
import admin from 'firebase-admin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// point to your JSON in the project root
const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const firestore = {
  FieldValue: {
    serverTimestamp: admin.firestore.FieldValue.serverTimestamp,
  },
};

export { db, firestore };
