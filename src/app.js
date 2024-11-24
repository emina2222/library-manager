const express = require('express');
const booksRoutes = require('./routes/books');
const { errorHandler } = require('./middleware/error-handler');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', booksRoutes);

// Error Handling
app.use(errorHandler);

module.exports = app;
