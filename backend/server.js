const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data

// Static files (for uploaded files, if needed)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const transcribeRoutes = require('./routes/transcribeRoutes');
console.log("✅ Loaded transcribeRoutes");
app.use('/api', transcribeRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// ⚠️ Move this BEFORE app.listen()
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
