const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const appointmentRoutes = require("./routes/appointments");

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// API Route
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend working — Smart Scheduler");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
