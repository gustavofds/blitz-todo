const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config();

const DATABASE_URL = process.env.DB_URL.replace(
  '<password>',
  process.env.DB_PASSWORD
);

mongoose.connect(DATABASE_URL).then(() => {
  console.log('Connected to Database!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
