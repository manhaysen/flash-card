const React = require('react');
const Layout = require('./Layout');

module.exports = function Result({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div>

        <h1>Ваш результат</h1>
        <p>{user.name}</p>
        <p />
      </div>
    </Layout>
  );
};
