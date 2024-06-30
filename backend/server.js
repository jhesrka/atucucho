// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const negociosRoutes = require('./routes/negocios');

dotenv.config();

const app = express();

sequelize.sync().then(() => {
  console.log('Database connected!');
});

app.use(cors());
app.use(express.json());

app.use('/api/negocios', negociosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
