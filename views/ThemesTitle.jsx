const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemeTitle({ title, user, themeDB }) {
  return (
    <Layout title={title} user={user}>
      <div className="bg__game">
        <div className="container">
          <div className="card__flex">
            {themeDB.map((e) => (
              <a href={`/game/${e.id}`} className="card__item">
                <img src={e.url} alt="" className="img__game" />
                <button type="button" className="card__btn">
                  {e.title}
                </button>
              </a>
            ))}
          </div>
        </div>
        <img src="/img/game.png" alt="game" className="game__like" />
      </div>
    </Layout>
  );
};
