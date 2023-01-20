const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemeTitle({ title, user, themeDB }) {
  return (
    <Layout title={title} user={user}>
      <div>
        {themeDB.map((e) => (
          <div>
            <button>
            {e.title}
            </button>
            </div>
        ))}
      </div>
    </Layout>
  );
};
