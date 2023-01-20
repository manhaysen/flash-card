const React = require('react');
const Layout = require('./Layout');

module.exports = function Result({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='result_score'>

        {/* <h1>Ваш результат</h1> */}
        <div>{user.name}, поздравляем! Ваш результат:</div>
        <div>{user.score} баллов</div>
      </div>
    </Layout>
  );
};
