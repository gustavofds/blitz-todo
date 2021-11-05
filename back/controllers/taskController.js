const Task = require('../models/Task');
const AppError = require('../utils/AppError');

exports.getAllTasks = async (req, res, next) => {
  try {
    let tasks;

    if (req.query.sortBy && req.query.status) {
      tasks = await Task.find({ status: req.query.status }).sort({
        [req.query.sortBy]: req.query.order,
      });
    } else if (req.query.sortBy) {
      tasks = await Task.find().sort({ [req.query.sortBy]: req.query.order });
    } else if (req.query.status) {
      tasks = await Task.find({ status: req.query.status });
    } else {
      tasks = await Task.find().sort({ description: -1 });
    }

    res.status(200).send(tasks);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { description, status } = req.body;

    const task = await Task.create({ description, status });

    res.status(201).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!task) {
      return next(new AppError('No task found with that ID', 404));
    }

    res.status(201).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return next(new AppError('No task found with that ID', 404));
    }

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
