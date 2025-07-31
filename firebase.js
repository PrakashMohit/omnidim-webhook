const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");

// Read JSON content from the file
const serviceAccountPath = path.join(__dirname, "firebaseServiceAccountKey.json");
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
