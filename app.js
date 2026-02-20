// app.js

const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

// Load pool
const db = require('./config/db');

console.log("✅ MySQL pool initialized");

// Routes
const transactionRoutes = require('./config/models/controllers/routes/TransactionsRoutes.js');

app.use('/transactions', transactionRoutes);

app.get('/', (req, res) => {
    res.send("Expense Tracker Backend Running...");
});

// Error handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Something went wrong." });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
