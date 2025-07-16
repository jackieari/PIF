const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
