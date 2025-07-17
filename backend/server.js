const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
