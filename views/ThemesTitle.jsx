const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemeTitle({ title, user, themeDB }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <div className="card__flex">
          {themeDB.map((e) => (
            <a href={`/game/${e.id}`} className="card__item">
              <img src="" alt="" />
              <button type="button">{e.title}</button>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};
