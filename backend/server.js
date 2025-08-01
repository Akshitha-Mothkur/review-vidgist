const express = require("express");
const cors = require("cors");
const transcribeRoutes = require("./routes/transcribeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send("Backend is live");
});

app.use("/api/transcribe", transcribeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
