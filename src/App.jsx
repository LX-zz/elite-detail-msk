import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [accent, setAccent] = useState("#cfae70");
  const [menuOpen, setMenuOpen] = useState(false);

  // show Telegram FAB only after scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open (mobile)
  useEffect(() => {
    if (menuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app" id="top" style={{ "--accent": accent }}>
      {/* HEADER */}
      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu}>
          ELITE DETAIL <span>MSK</span>
        </a>

        <nav className="nav nav--desktop">
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
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

        <nav className="nav nav--mobile">
          <a href="#services" onClick={closeMenu}>
            Услуги
          </a>
          <a href="#about" onClick={closeMenu}>
            О нас
          </a>
          <a href="#contacts" onClick={closeMenu}>
            Контакты
          </a>
        </nav>
      </aside>

      {/* HERO */}
      <section className="hero">
        <div className="hero-line" />
        <h1 className="hero-title">
          ELITE DETAIL <span>MSK</span>
        </h1>
        <h2 className="hero-subtitle">Премиальный детейлинг автомобилей</h2>

        {/* CTA → Telegram */}
        <a className="btn btn-solid" href="https://t.me/Style_touch_detail" target="_blank" rel="noreferrer">
          Записаться
        </a>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="services bg-steel">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Услуги</h2>
            <div className="section-line" />
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
              <div className="service-title">Оклейка плёнками</div>
              <div className="service-tag">Обновление внешности без покраски</div>
            </div>

            <div className="service-tile">
              <div className="service-title">PDR</div>
              <div className="service-tag">Удаление вмятин без покраски</div>
            </div>

            <div className="service-tile">
              <div className="service-title">Полировка + антидождь</div>
              <div className="service-tag">Сияние, которое заметят все</div>
            </div>

            <div className="service-tile">
              <div className="service-title">Керамика кузова и салона</div>
              <div className="service-tag">Глянец и долговременная защита</div>
            </div>
          </div>

          <div className="services-cta">
            <a href="#all-services" className="btn btn-solid">
              Все услуги
            </a>
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section id="all-services" className="all-services bg-steel">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Все услуги</h2>
            <div className="section-line" />
          </div>

          <div className="all-services-grid">
            <div className="service-card">
              <h3>Защита</h3>
              <ul className="service-list">
                <li>Антигравийная плёнка</li>
                <li>Бронь лобового стекла</li>
                <li>Керамика кузова и салона</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Внешний вид</h3>
              <ul className="service-list">
                <li>Тонировка</li>
                <li>Оклейка плёнками</li>
                <li>Полировка + антидождь</li>
                <li>Покраска дисков</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Ремонт и восстановление</h3>
              <ul className="service-list">
                <li>PDR — удаление вмятин</li>
                <li>Замена лобового стекла</li>
                <li>Ремонт передней оптики</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Интерьер</h3>
              <ul className="service-list">
                <li>Химчистка + озонирование</li>
                <li>Перешив руля</li>
                <li>Шумоизоляция и антискрип</li>
              </ul>
            </div>

            <div className="service-card service-card--wide">
              <h3>Индивидуальные проекты</h3>
              <ul className="service-list service-list--cols">
                <li>Стайлинг / антихром</li>
                <li>Винилография</li>
                <li>Тюнинг и установка обвесов</li>
                <li>Наклейки / плоттерная резка</li>
              </ul>
            </div>
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

          <a className="contact-link" href="tel:+79261007726">
            +7 (926) 100-77-26
          </a>
          </div>
      </section>

      {/* FOOTER minimal */}
      <footer className="footer-min">
        <div className="footer-inner">
          <div className="footer-brand">
            ELITE DETAIL <span>MSK</span>
          </div>

          <div className="footer-meta">
            <span>Москва</span>
            <span className="dot">•</span>
            <a className="footer-link" href="tel:+79261007726">
              +7 (926) 100-77-26
            </a>
          </div>

          <a className="footer-cta" href="https://t.me/Style_touch_detail" target="_blank" rel="noreferrer">
            Telegram
          </a>

          <div className="footer-copy">© {new Date().getFullYear()} Elite Detail MSK</div>
        </div>
      </footer>

      {/* Telegram floating button (shows after scroll) */}
      <a
        className="tg-fab"
        href="https://t.meStyle_touch_detail"
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
      >
        <span className="tg-fab-ic">✈</span>
        <span className="tg-fab-txt">Telegram</span>
      </a>
    </div>
  );
}
