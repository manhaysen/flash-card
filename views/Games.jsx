const React = require('react');
const Layout = require('./Layout');

module.exports = function Games({ questions, user, title,id }) {
  return (
    <Layout user={user} title={title}>
      <div className="gameContainer justify-content-center" id="gameContainer">
        <div className="questionGame  text-align-center" id="question">
          Вопрос:

          <div>{questions.question}</div>
<a href={`/game/${questions.theme_id}/${id}`}> zxcvbnm</a>
        </div>
        <input name="useranswer" type="text" />
      </div>
    </Layout>
  );
};
