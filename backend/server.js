const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes'); // The file where the above router code exists

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Use user routes
app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
