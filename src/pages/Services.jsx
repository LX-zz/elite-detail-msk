import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function ServiceItem({ id, title, text, openId, setOpenId }) {
  const isOpen = openId === id;
  const bodyId = `svc-body-${id}`;

  return (
    <div className={`svc-card ${isOpen ? "is-open" : ""}`}>
      <button
        className="svc-head"
        onClick={() => setOpenId(isOpen ? null : id)}
        aria-expanded={isOpen}
        aria-controls={bodyId}
      >
        <span className="svc-title">{title}</span>
        <span className="svc-plus">{isOpen ? "—" : "+"}</span>
      </button>

      <div id={bodyId} className="svc-body">
        <div className="svc-body__inner">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState(0);

  const services = useMemo(
    () => [
      {
        title: "Полировка фар",
        text:
          "Полировка фар — это процесс восстановления прозрачности и чистоты пластиковых или стеклянных фар автомобиля. Мутность и желтизна часто появляются из-за УФ-излучения, химии и механического износа. Полировка улучшает внешний вид и освещение, что напрямую влияет на безопасность в ночное время.",
      },
      {
        title: "Бронирование фар",
        text:
          "Бронирование фар — современный и эффективный способ защиты фар от царапин, сколов и воздействия агрессивных внешних факторов.",
      },
      {
        title: "Перешив руля",
        text:
          "Перешив руля — замена или обновление кожаной обивки рулевого колеса. Освежает интерьер и улучшает тактильные ощущения при управлении автомобилем.",
      },
      {
        title: "Химчистка салона",
        text:
          "Химчистка салона — глубокая очистка интерьера с использованием специальных средств и оборудования. Удаляет загрязнения, пятна, пыль и неприятные запахи.",
      },
      {
        title: "Антигравийная плёнка (бронирование кузова)",
        text:
          "Бронирование кузова антигравийной плёнкой — один из самых эффективных способов защиты ЛКП от пескоструя, сколов и мелких царапин.",
      },
      {
        title: "Керамическое покрытие",
        text:
          "Керамика образует стойкий барьер от УФ, дождя, грязи, химии и мелких повреждений. Гидрофобные свойства упрощают мойку, а блеск сохраняется надолго.",
      },
      {
        title: "Полировка кузова",
        text:
          "Полировка кузова восстанавливает блеск и убирает мелкие дефекты. Создаёт защитный слой и снижает влияние УФ, соли и реагентов.",
      },
      {
        title: "Тонировка стёкол",
        text:
          "Тонировка — защита от солнца и нагрева салона, меньше выгорание, больше приватности.",
      },
      {
        title: "Бронирование лобового стекла (Never Scratch)",
        text:
          "Плёнка Never Scratch защищает от пескоструя и камней, сохраняет заводскую прозрачность и корректную работу датчиков/камер. Установка без искажений.",
      },
      {
        title: "Мойка двигателя + консервация",
        text:
          "Деликатная мойка без высокого давления. После — консервация: вытесняет влагу, защищает контакты, снижает риск коррозии.",
      },
      {
        title: "Шумоизоляция",
        text:
          "Комплекс работ по снижению шума и вибраций: двери, пол, арки, багажник. Тише, комфортнее и лучше звук.",
      },
      {
        title: "PDR — удаление вмятин без покраски",
        text:
          "Восстановление формы кузова без повреждения заводского покрытия: быстро, аккуратно и без следов ремонта.",
      },
    ],
    []
  );

  return (
    <div className="app">
      <header className="header">
        <Link className="logo" to="/">
          ELITE DETAIL <span>MSK</span>
        </Link>

        <nav className="nav nav--desktop">
          <Link className="nav-link" to="/#services">Услуги</Link>
          <Link className="nav-link" to="/#about">О нас</Link>
          <Link className="nav-link" to="/#contacts">Контакты</Link>
          <Link className="nav-link" to="/services">Все услуги</Link>
        </nav>
      </header>

      <section className="services-page bg-steel">
        <div className="container">
          <div className="services-page__top services-page__top--center">
            <h1 className="services-page__title">Все услуги</h1>
            <div className="section-line"></div>

            <div className="services-page__actions services-page__actions--center">
              <Link className="btn" to="/">На главную</Link>
              <a
                className="btn btn-solid"
                href="https://t.me/EliteDetail"
                target="_blank"
                rel="noreferrer"
              >
                Заказать в Telegram
              </a>
            </div>
          </div>

          <div className="svc-grid svc-grid--center">
            {services.map((s, idx) => (
              <ServiceItem
                key={s.title}
                id={idx}
                title={s.title}
                text={s.text}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-min">
        <div className="footer-inner">
          <div className="footer-brand">
            ELITE DETAIL <span>MSK</span>
          </div>

          <div className="footer-meta">
            Москва <span className="dot">•</span>{" "}
            <a className="footer-link" href="tel:+79261007726">
              +7 (926) 100-77-26
            </a>
          </div>

          <div className="footer-actions">
            <a
              href="https://www.avito.ru/brands/314b5bc4c521ab6778a3813b3db3ae41?src=sharing"
              className="footer-cta footer-cta--avito"
              target="_blank"
              rel="noreferrer"
            >
              Avito
            </a>
            <a
              href="https://t.me/+aFCEBk5m3ToxMjEy"
              className="footer-cta footer-cta--channel"
              target="_blank"
              rel="noreferrer"
            >
              Telegram канал
            </a>
            <a
              href="https://t.me/EliteDetail"
              className="footer-cta"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
