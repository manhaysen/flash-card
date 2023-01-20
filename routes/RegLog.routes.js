/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
require('dotenv').config();
const router = require('express').Router();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const Registration = require('../views/Registration');
const { User } = require('../db/models');

router.get('/registration', (req, res) => {
  try {
    res.renderComponent(Registration, { title: 'Register Page' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/registration', async (req, res) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { name, email, password } = req.body;
    const nameCheck = await User.findOne({ where: { name } });
    const emailCheck = await User.findOne({ where: { email } });
    if (!name && !email && !password) {
      res.status(400).json({
        error: 'this pole empty',
      });
      return;
    }
    if (nameCheck) {
      res.status(400).json({
        error: 'User with this login already exists',
      });
      return;
    }

    if (password.length < 8) {
      res.status(400).json({
        error: 'Password must be more than 8 characters',
      });
      return;
    }

    if (name[0] !== name[0].toUpperCase()) {
      res.status(400).json({
        error: 'Login must be capitalized',
      });
      return;
    }
    if (emailCheck) {
      res.status(400).json({
        error: 'User with this email already exists',
      });
      return;
    }
    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );
    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
      score: 0
    });
    req.session.userId = newUser.id;
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: 'что то не так' });
  }
});

router.get('/login', (req, res) => {
  try {
    res.renderComponent(Login, { title: 'Login Page' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name && !password) {
      res.status(400).json({
        error: 'this pole empty',
      });
      return;
    }
    const user = await User.findOne({
      where: {
        [Op.or]: [{ name }, { email: name }],
      },
    });
    const newPas = await bcrypt.compare(password, user.password);
    if (!newPas) {
      res.status(400).json({
        error: 'Пароль введен неверно',
      });
      return;
    }
    req.session.userId = user.id;
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
router.get('/logout', (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid');
      res.redirect('/');
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
