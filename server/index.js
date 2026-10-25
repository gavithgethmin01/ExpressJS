const express = require("express");
const app = express();
const PORT = 3000;

// මුල් පිටුවට (Root route) එන ඉල්ලීම් සඳහා
app.get("/", (req, res) => {
  res.send("ආයුබෝවන්! Express.js ලෝකයට සාදරයෙන් පිළිගනිමු.");
});

// සර්වර් එක ක්‍රියාත්මක කිරීම
app.listen(PORT, () => {
  console.log(`සර්වර් එක සාර්ථකව ක්‍රියාත්මක වේ: http://localhost:${PORT}`);
});
