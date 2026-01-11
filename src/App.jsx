import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Services from "./pages/Services.jsx";


function Home() {
  const [accent, setAccent] = useState("#cfae70");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app" style={{ "--accent": accent }}>
      {/* HEADER */}
      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu}>
          ELITE DETAIL <span>MSK</span>
        </a>

        <nav className="nav nav--desktop">
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
          <Link className="nav-link" to="/services">Все услуги</Link>
        </nav>

        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MOBILE MENU */}
<div
  className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
  onClick={closeMenu}
/>

<aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
  <div className="mobile-menu__head">
    <div className="mobile-menu__title">Меню</div>
    <button className="mobile-menu__close" onClick={closeMenu}>
      ✕
    </button>
  </div>

  {/* ОСНОВНОЕ МЕНЮ */}
  <nav className="nav nav--mobile" onClick={closeMenu}>
    <a href="#services">Услуги</a>
    <a href="#about">О нас</a>
    <a href="#contacts">Контакты</a>
    <Link to="/services">Все услуги</Link>
  </nav>

  {/* MINI FOOTER */}
  <div className="mobile-mini-footer">
    <div className="mobile-mini-footer__brand">
      ELITE DETAIL <span>MSK</span>
    </div>

    <a
      className="mobile-mini-footer__tel"
      href="tel:+79261007726"
    >
      +7 (926) 100-77-26
    </a>

    <a
      className="mobile-mini-footer__tg"
      href="https://t.me/EliteDetail"
      target="_blank"
      rel="noreferrer"
    >
      Telegram
    </a>
  </div>
</aside>


      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-line"></div>
        <h1 className="hero-title">
          ELITE DETAIL <span>MSK</span>
        </h1>
        <h2 className="hero-subtitle">Премиальный детейлинг автомобилей</h2>

        {/* кнопка сразу в Telegram */}
        <a className="btn btn-solid" href="https://t.me/EliteDetail" target="_blank" rel="noreferrer">
          Записаться в Telegram
        </a>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="services bg-steel">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Услуги</h2>
            <div className="section-line"></div>
          </div>

          <div className="services-grid">
            <div className="service-tile">
              <div className="service-title">Тонировка</div>
              <div className="service-tag">Комфорт, стиль и приватность</div>
            </div>

            <div className="service-tile">
              <div className="service-title">Антигравийная защита</div>
              <div className="service-tag">Броня от сколов и царапин</div>
            </div>

            <div className="service-tile">
              <div className="service-title">Бронирование лобового</div>
              <div className="service-tag">Прозрачная плёнка Never Scratch</div>
            </div>

            <div className="service-tile">
              <div className="service-title">Полировка кузова</div>
              <div className="service-tag">Глубина цвета и блеск</div>
            </div>

            <div className="service-tile">
              <div className="service-title">Керамика</div>
              <div className="service-tag">Долговременная защита и гидрофоб</div>
            </div>

            <div className="service-tile">
              <div className="service-title">PDR</div>
              <div className="service-tag">Удаление вмятин без покраски</div>
            </div>
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn btn-solid">
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark">
        <div className="container">
          <h2>Elite Detail MSK</h2>
          <p className="text">
            Мы работаем с автомобилями, где важны качество, аккуратность и внимание к каждой детали.
            Используем премиальные материалы и проверенные технологии.
          </p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section">
        <div className="container">
          <h2>Контакты</h2>
          <p className="text">г. Москва, ул. Островитянова,53</p>
          <p className="text">Ежедневно 10:00–22:00</p>
          <p className="text">
            <a className="footer-link" href="tel:+79261007726">+7 (926) 100-77-26</a>
          </p>
        </div>
      </section>

      <footer className="footer-min">
        <div className="footer-inner">
          <div className="footer-brand">
            ELITE DETAIL <span>MSK</span>
          </div>

          <div className="footer-meta">
            Москва <span className="dot">•</span>{" "}
            <a className="footer-link" href="tel:+79261007726">+7 (926) 100-77-26</a>
          </div>

          <a className="footer-cta" href="https://t.me/EliteDetail" target="_blank" rel="noreferrer">
            Telegram
          </a>

          <div className="footer-copy">© 2026 Elite Detail MSK</div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
