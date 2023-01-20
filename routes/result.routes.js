const router = require('express').Router();
const Result = require('../views/Result');
const {User} = require('../db/models')
router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findByPk(userId);

  res.renderComponent(Result, {
    title: 'Result Page',
    user,
  });
});

module.exports = router;
