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

    if (!task) {
      return res.status(404).json({ message: 'No task found with that ID' });
    }

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

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: 'No task found with that ID' });
    }

    res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};
