const React = require('react');
const Layout = require('./Layout');

module.exports = function Games({ questions, user, title, id, answers }) {
  return (
    <Layout user={user} title={title}>
      <div className="container">
        <div className="game__size">
          <div className="question__game  text-align-center" id="questions">
            <span>Вопрос:</span>
            <div className="fleex">
              <div> {questions.question}</div>
              <a
                href={`/game/${questions.theme_id}/${id}`}
                className="js-button link-slide"
                data-id={id}
                data-tema={questions.theme_id}
              >
                <img src="/img/arrow.png" alt="arrow" className="arrow" />
              </a>
            </div>
            <form
              name="forma"
              action={`/game/answer/${questions.id}`}
              method="POST"
              className="form__game"
            >
              <input
                name="useranswer"
                type="text"
                className="form-control mb-2 bg-light"
              />
              <button type="submit" className="button">
                я уверен
              </button>
            </form>
            <p className="truee"></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
