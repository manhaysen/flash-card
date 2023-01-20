/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="form__flex">
          <form
            method="POST"
            action="/auth/registration"
            className="form__size"
          >
            <div>
              Имя
              <input
                type="text"
                name="name"
                className="form-control mb-2 bg-light"
              />
            </div>
            <div>
              Почта
              <input
                type="email"
                name="email"
                className="form-control mb-2 bg-light"
              />
            </div>
            <div>
              Пароль
              <input
                type="password"
                name="password"
                className="form-control mb-2 bg-light"
              />
            </div>
            <button type="submit" className="button btn__mr">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
