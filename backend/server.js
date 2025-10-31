const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file when available
dotenv.config();

const postsRoutes = require('./routes/posts');
const eventsRoutes = require('./routes/events');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/posts', postsRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/users', usersRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Skate Together API is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
