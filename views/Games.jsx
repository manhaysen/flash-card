const React = require('react');
const Layout = require('./Layout');

module.exports = function Games({ questions, user, title, id, answers }) {
  return (
    <Layout user={user} title={title}>
      <div className="gameContainer justify-content-center" id="gameContainer">
        <div className="questionGame  text-align-center" id="questions">
          Вопрос:
          <div>{questions.question}</div>
          <a
            href={`/game/${questions.theme_id}/${id}`}
            className="js-button"
            data-id={id}
            data-tema={questions.theme_id}
          >
            {' '}
            следующий вопрос
          </a>
        </div>
        <form
          name="forma"
          action={`/game/answer/${questions.id}`}
          method="POST"
        >
          <input name="useranswer" type="text" />
          <button type="submit">
            РАССКАЖИ МНЕ КАКОЙ БУДЕТ ОТВЕТ НА Вопрос
          </button>
        </form>
        <p className="truee"></p>
      </div>
    </Layout>
  );
};
