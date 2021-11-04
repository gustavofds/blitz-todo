const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'A task must have a description.'],
    trim: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'done'],
      message: 'Status is either: pending, in-progress or done',
    },
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
