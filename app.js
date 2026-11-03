require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');
const app = express();
app.set('view engine', 'ejs');
mongoose.connect(process.env.MONGODB_URI);
app.get('/', async (req, res) => {
  const items = await Portfolio.find();
  res.render('index', { name: 'Meghav Manoj', items });
});
app.listen(process.env.PORT || 3000);
