const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");

// 👇 Make sure this matches the Secret File name in Render
const keyPath = path.join(__dirname, "firebaseServiceAccountKey.json");

// 👇 This reads the file contents as a string, then parses it to JSON
const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;
