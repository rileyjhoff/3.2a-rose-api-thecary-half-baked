const { Router } = require('express');
const Character = require('../models/Character');
module.exports = Router().get('/', async (req, res) => {
  const characters = await Character.getAll();
  res.json(characters);
});
