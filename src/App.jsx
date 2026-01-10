import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [accent, setAccent] = useState("#cfae70");
  const [menuOpen, setMenuOpen] = useState(false);

  // блокируем скролл страницы когда меню открыто (премиум-ощущение)
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

        {/* Desktop nav */}
        <nav className="nav nav--desktop">
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>

        {/* Mobile burger */}
        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__head">
          <div className="mobile-menu__title">Меню</div>
          <button className="mobile-menu__close" onClick={closeMenu} aria-label="Закрыть">
            ✕
          </button>
        </div>

        <nav className="nav nav--mobile">
          <a href="#services" onClick={closeMenu}>Услуги</a>
          <a href="#about" onClick={closeMenu}>О нас</a>
          <a href="#contacts" onClick={closeMenu}>Контакты</a>
        </nav>
      </aside>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-line" />
        <h1 className="hero-title">
          ELITE DETAIL <span>MSK</span>
        </h1>
        <h2 className="hero-subtitle">Премиальный детейлинг автомобилей</h2>

        <a className="btn btn-solid" href="#contacts">
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
          <p className="text">г. Москва, ул. Островитянова 53</p>
          <p className="text">Ежедневно 10:00–22:00</p>
          <p className="text">+7 (926) 100-77-26</p>
        </div>
      </section>

      <footer className="footer">© Elite Detail MSK</footer>
      <a
        href="https://t.me/Style_touch_detail"
        className="tg-fab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.04 15.46 8.8 19.6c.34 0 .49-.15.67-.33l1.61-1.54 3.34 2.45c.61.34 1.05.16 1.21-.56l2.2-10.34c.2-.92-.33-1.28-.93-1.05L3.2 10.4c-.9.35-.89.85-.16 1.07l3.95 1.23 9.16-5.78c.43-.27.83-.12.5.15z"
          />
        </svg>
      </a>
    </div>
    
  );
  
}
