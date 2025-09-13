const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
