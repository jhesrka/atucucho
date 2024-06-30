// backend/models/Negocio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Negocio = sequelize.define('Negocio', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  whatsapp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Negocio;
