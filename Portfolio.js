const mongoose = require('mongoose');
module.exports = mongoose.model('Portfolio', new mongoose.Schema({ title: String, tech: String }));
