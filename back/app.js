const path = require('path');
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const errorController = require('./controllers/errorController');
const AppError = require('./utils/AppError');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', taskRoutes);

app.all('*', (req, res, next) => {
  next(new AppError('Route not found', 404));
});

app.use(errorController);

module.exports = app;
