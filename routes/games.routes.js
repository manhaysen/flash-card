const router = require('express').Router();
const Games = require('../views/Games');
const { Question, User, Answer } = require('../db/models');

router.get('/:theme_id', async (req, res) => {
  try {
    const { theme_id } = req.params;
    const { userId } = req.session;
    const questions = await Question.findAll({
      where: {
        theme_id,
      },
      raw: true,
    });
    const id = 1;
    const user = await User.findByPk(userId);
    res.renderComponent(Games, {
      user,
      title: 'Game Page',
      questions: questions[id - 1],
      id: id + 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:theme_id/7', (req, res) => {
  res.redirect('/result');
});

router.get('/:theme_id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // if (Number(id) === 7) {
    //   res.redirect('/');
    // }
    const { theme_id } = req.params;
    const { userId } = req.session;
    const questions = await Question.findAll({
      where: {
        theme_id,
      },
      raw: true,
    });

    const user = await User.findByPk(userId);
    res.renderComponent(Games, {
      user,
      title: 'Game Page',
      questions: questions[Number(id) - 1],
      id: Number(id) + 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post('/answer/:id', async (req, res) => {
  const { id } = req.params;
  const { useranswer } = req.body;
  const answers = await Question.findOne({
    where: {
      id,
    },
    include: { model: Answer, key: 'answer_id' },
  });
  if (answers.Answer.answer.toLowerCase() === useranswer.toLowerCase()) {
    res.json({ message: 'ok' });
  } else {
    res.json({
      trueAnswer: `Ты расстроил Доминика, правильный ответ: ${answers.Answer.answer}.`,
    });
  }
});
module.exports = router;
