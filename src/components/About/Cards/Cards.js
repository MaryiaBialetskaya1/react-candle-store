import s from "./Cards.module.css";

export const Cards = ({ about, showMoreAndLessText }) => {
  return (
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
  );
};
