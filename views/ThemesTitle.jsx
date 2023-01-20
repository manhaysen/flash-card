const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemeTitle({ title, user, themeDB }) {
  return (
    <Layout title={title} user={user}>
      <div>
        {themeDB.map((e) => (
          <a href={`/game/${e.id}`}>
            <button type="button">{e.title}</button>
          </a>
        ))}
      </div>
    </Layout>
  );
};
