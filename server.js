const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api", apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
