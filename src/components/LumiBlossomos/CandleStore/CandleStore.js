export const CandlesStore = ({ candlesStore }) => {
  return (
    <div>
      {candlesStore.map((item) => {
        const { id, img, price } = item;
        return (
          <div key={id}>
            <div>
              <img src={img} alt="candles" width="400px" height="500px" />
            </div>
            <div>
              <h4>{price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
