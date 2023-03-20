import s from "./About.module.css";
import { useState } from "react";
import { aboutCards } from "../../data";

export const About = () => {
  const [about] = useState(aboutCards);

  const [showText, setShowMoreText] = useState(false);
  const showMoreAndLessText = (element) => {
    element.showMore = !element.showMore;
    setShowMoreText(!showText);
  };
  return (
    <div>
      <div className={s.imageContainer}>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1608085021802-e886468f5fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhbmRsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="candle"
        />
        <div className={s.textContainer}>
          <h3 className={s.header}>CandleriaStore® </h3>
          <p className={s.paragraph}>A Story of Sophistication</p>
        </div>
      </div>
      <div className={s.pageHeaderContainer}>
        <h2 className={s.pageHeader}>Our Way</h2>
      </div>
      <div className={s.page}>
        {about.map((item) => {
          const { id, img, year, header, paragraph, showMore } = item;
          return (
            <div key={id} className={s.cardContainer}>
              <div className={s.paragraphContainer}>
                <div>
                  <h2 className={s.year}>{year}</h2>
                </div>
                <div>
                  <h3 className={s.paragraphHeader}>{header}</h3>
                </div>
                <div>
                  <p className={s.par}>
                    {showMore ? paragraph : paragraph.substring(0, 170) + "..."}
                    <button
                      className={s.showMoreAndLessText}
                      onClick={() => showMoreAndLessText(item)}
                    >
                      {showMore ? "Show Less" : "Show more"}
                    </button>
                  </p>
                </div>
              </div>
              <div className={s.cardImage}>
                <img src={img} alt="candle" className={s.image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
