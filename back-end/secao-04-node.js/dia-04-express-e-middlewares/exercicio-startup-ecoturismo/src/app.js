const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const generateToken = require('./utils/generateToken');
const validateDifficulty = require('./middlewares/validateDifficulty');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/activities', auth,
validateDifficulty,
validateRating,
validateCreatedAt,
validateDescription,
validatePrice,
validateName, (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;