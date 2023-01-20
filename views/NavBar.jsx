/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Nav({ user }) {
  return (
    <header className="header">
      <nav className="container navbar bg-body-tertiary">
        <div className="header__logo">
          <a href="/" className="header__link">
            <img src="/img/logo.png" alt="Logo" className="header__img" />
            <span className="header__text">Family Quiz</span>
          </a>
        </div>
        {!user ? (
          <div>
            <a className="nav__link" href="/auth/login">
              <button type="submit" className="button">
                Логин
              </button>
            </a>
            <a className="nav__link" href="/auth/registration">
              <button type="submit" className="button">
                Регистрация
              </button>
            </a>
          </div>
        ) : (
          <>
            <a className="nav__link" href="/auth/logout">
              <button type="submit" className="button js-btn-exit">
                Выйти
              </button>
            </a>
            <a href="/cards">
              <button type="button" className="button">
                Начать тест
              </button>
            </a>
          </>
        )}
      </nav>
    </header>
  );
};
