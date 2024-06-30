// backend/routes/negocios.js
const express = require('express');
const router = express.Router();
const Negocio = require('../models/Negocio');

router.get('/', async (req, res) => {
  const negocios = await Negocio.findAll();
  res.json(negocios);
});

router.post('/', async (req, res) => {
  const { title, description, image, whatsapp } = req.body;
  const newNegocio = await Negocio.create({ title, description, image, whatsapp });
  res.json(newNegocio);
});

module.exports = router;
