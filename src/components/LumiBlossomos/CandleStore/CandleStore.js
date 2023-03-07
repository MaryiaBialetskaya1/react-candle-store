import s from "./CandleStore.module.css";

export const CandlesStore = ({ candlesStore }) => {
  return (
    <div className={s.body}>
      {candlesStore.map((item) => {
        const { id, img, price, description } = item;
        return (
          <div className={s.container} key={id}>
            <div className={s.wrapper}>
              <img src={img} alt="candles" width="400px" height="500px" />
              <h1 className={s.header}> {price}</h1>
              <p className={s.paragraph}>{description}</p>
            </div>
            <div className={s.buttonWrapper}>
              <button className={`${s.btn} ${s.outline}`}>DETAILS</button>
              <button className={`${s.btn} ${s.fill}`}>BUY NOW</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
