import { useEffect, useMemo, useRef, useState } from "react";

export default function Reviews({ items = [] }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  // если пока нет контента — рисуем 10 плейсхолдеров
  const data = useMemo(() => {
    if (items?.length) return items;
    return Array.from({ length: 10 }).map((_, i) => ({
      id: `ph-${i}`,
      type: "image",
      src: "",
      alt: `Отзыв ${i + 1}`,
    }));
  }, [items]);

  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

  const getActiveIndexFromScroll = () => {
    const el = scrollerRef.current;
    if (!el) return 0;

    const children = Array.from(el.children);
    if (!children.length) return 0;

    // выбираем слайд, чей центр ближе к центру контейнера
    const center = el.scrollLeft + el.clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    return clamp(bestIdx, 0, data.length - 1);
  };

  const scrollToIndex = (i) => {
    const el = scrollerRef.current;
    if (!el) return;

    const children = el.children;
    const target = children[i];
    if (!target) return;

    const left =
      target.offsetLeft - (el.clientWidth / 2 - target.clientWidth / 2);

    el.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActive(getActiveIndexFromScroll());
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // выставим активный сразу
    setActive(getActiveIndexFromScroll());

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  return (
    <section id="reviews" className="reviews bg-steel">
      <div className="reviews-wrap">
        <div className="section-head section-head--center">
          <h2>Отзывы</h2>
          <div className="section-line"></div>
        </div>

        <div className="reviews-frame">
          <div className="reviews-track" ref={scrollerRef}>
            {data.map((it, idx) => (
              <div className="reviews-slide" key={it.id ?? idx}>
                {it.type === "video" ? (
                  it.src ? (
                    <video
                      className="reviews-media"
                      src={it.src}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="review-ph">
                      <div className="review-ph__title">Видео отзыва</div>
                      <div className="review-ph__sub">
                        Поставишь позже (№ {idx + 1})
                      </div>
                    </div>
                  )
                ) : it.src ? (
                  <img
                    className="reviews-media"
                    src={it.src}
                    alt={it.alt || `Отзыв ${idx + 1}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="review-ph">
                    <div className="review-ph__title">Фото отзыва</div>
                    <div className="review-ph__sub">
                      Поставишь позже (№ {idx + 1})
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-dots">
          {data.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`reviews-dot ${i === active ? "is-active" : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Перейти к отзыву ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
