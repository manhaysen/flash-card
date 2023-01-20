const React = require('react');
const Layout = require('./Layout');

module.exports = function ThemeTitle({ title, user, themeDB }) {
  return (
    <Layout title={title} user={user}>
      <div>
        {themeDB.map((e) => (
          <div>
            <a href={`/game/${e.id}`}>
              
              <button>
                {e.title}
              </button>

            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
