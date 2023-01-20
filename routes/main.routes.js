const router = require('express').Router();
const Main = require('../views/MainPage');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const user = await User.findByPk(userId);
    res.renderComponent(Main, { user, title: 'Home Page' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
