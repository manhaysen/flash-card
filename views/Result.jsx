const React = require('react');
const Layout = require('./Layout');

module.exports = function Result({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <div className="result_score">
          {/* <h1>Ваш результат</h1> */}
          <div>{user.name}, поздравляем! Ваш результат:</div>
          <div>{user.score} баллов</div>
          {user.score < 30 ? (
            <p>Семья отвергла вас</p>
          ) : (
            <p>Вы приняты в семью</p>
          )}
        </div>
        <img src="/img/imgLike.png" alt="likee" className="game__like" />
      </div>
    </Layout>
  );
};
