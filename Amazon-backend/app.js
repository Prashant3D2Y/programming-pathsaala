const express = require("express");
const productsRouter = require('./routes/reviewRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/review', reviewRoutes);

module.exports = app;
