/* eslint-disable react/prop-types */
const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children, user, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/style.css" /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <script src="/application.js" defer />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
