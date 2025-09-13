const express = require("express");
const app = express();
const PORT = 3000;
const userRoutes = require("./modules/user/router");

app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
