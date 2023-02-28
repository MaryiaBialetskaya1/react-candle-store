import s from "./CandleStore.module.css";

export const CandlesStore = ({ candlesStore }) => {
  return (
    <div className={s.body}>
      {candlesStore.map((item) => {
        const { id, img, price } = item;
        return (
          <div className={s.container} key={id}>
            <div className={s.wrapper}>
              <img src={img} alt="candles" width="400px" height="500px" />
              <h1> {price}</h1>
              <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
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

//   <div key={id}>
//     <div>
//       <img src={img} alt="candles" width="400px" height="500px" />
//     </div>
//     <div>
//       <h4>{price}</h4>
//     </div>
//   </div>
