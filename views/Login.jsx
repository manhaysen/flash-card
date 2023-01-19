/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <form method="POST" action="/auth/login">
        <div>
          UserName or Email
          <input type="text" name="name" />
        </div>

        <div>
          Password
          <input type="password" name="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </Layout>
  );
};
