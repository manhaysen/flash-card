/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <form method="POST" action="/auth/registration">
        <div>
          UserName
          <input type="text" name="name" />
        </div>
        <div>
          Email
          <input type="email" name="email" />
        </div>
        <div>
          Password
          <input type="password" name="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
};
