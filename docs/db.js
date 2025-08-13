

const admin = require('firebase-admin');

const serviceAccount = require('./reviewvidgist-firebase-adminsdk-fbsvc-7eb187d2ed.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

module.exports = db;
