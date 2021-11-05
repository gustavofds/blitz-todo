const AppError = require('../utils/AppError');

module.exports = (err, req, res, _next) => {
  if (err instanceof AppError) {
    return res.status(err.code).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Something went wrong :(' });
};
