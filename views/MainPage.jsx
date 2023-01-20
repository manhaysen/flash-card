const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user, title }) {
  return (
    <Layout user={user} title={title}>
      <div className="main__bg">
        <div className="container">
          <div className="call">
            <img src="/img/call.png" alt="call" className="call__img" />
            <span className="call__text">
              Чтобы стать частью семьи - зарегистрируйся и пройди тест
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
