const express = require("express");
const app = express();
const PORT = 3000;

// make root route
app.get("/", (req, res) => {
  res.send("Welcome to Express JS!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server strat successfully : http://localhost:${PORT}`);
});
