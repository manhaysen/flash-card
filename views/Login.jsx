/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="form__flex">
          <form method="POST" action="/auth/login" className="form__size">
            <span>Логин или email</span>
            <input
              type="text"
              name="name"
              className="form-control mb-2 bg-light"
            />
            <span>Пароль</span>
            <input
              type="password"
              name="password"
              className="form-control mb-2 bg-light"
            />
            <button type="submit" className="button btn__mr">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
