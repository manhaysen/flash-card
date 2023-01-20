/* eslint-disable no-console */
require('@babel/register');
require('dotenv').config();

const express = require('express');
const db = require('./db/models');

const app = express();
const PORT = process.env.PORT ?? 3000;
const config = require('./config/config');
const HomePage = require('./routes/main.routes');
const AuthRegLog = require('./routes/RegLog.routes');
const Title = require('./routes/themeTitle.routes');
const game = require('./routes/games.routes');
const result = require('./routes/result.routes');

config(app);

app.use('/', HomePage);
app.use('/auth', AuthRegLog);
app.use('/cards', Title);
app.use('/game', game);
app.use('/result', result);
const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
