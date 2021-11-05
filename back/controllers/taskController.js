const Task = require('../models/Task');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(201).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
