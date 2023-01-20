/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user, title }) {
  return (
    <Layout user={user} title={title}>
      <div className="container">
        <div>Hello</div>
      </div>
    </Layout>
  );
};
