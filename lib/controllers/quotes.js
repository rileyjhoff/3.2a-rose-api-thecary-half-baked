const { Router } = require('express');
const { Quote } = require('../models/Quote');
module.exports = Router().post('/', async (req, res, next) => {
  try {
    const quote = await Quote.insert(req.body);
    res.json(quote);
  } catch (e) {
    next(e);
  }
});
