const express = require('express');
const booksRoutes = require('./routers/books');
const { errorHandler } = require('./middleware/error-handler');
const routes = require('./routers/index');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(routes);

// Error Handling
app.use(errorHandler);

module.exports = app;
