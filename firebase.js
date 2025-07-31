const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");

// This must match the filename in Render's Secret File tab
const keyPath = path.join(__dirname, "firebaseServiceAccountKey.json");

// Read the JSON file contents
const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
