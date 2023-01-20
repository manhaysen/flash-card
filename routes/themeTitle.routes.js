const router = require('express').Router();

const { Theme, User } = require('../db/models');
const ThemesTitle = require('../views/ThemesTitle');
router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findByPk(userId);
  const themeDB = await Theme.findAll();
  res.renderComponent(ThemesTitle, {
    user,
    title: 'Theme page',
    themeDB,
  });
});

module.exports = router;
