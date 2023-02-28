import mainImage from "../LumiBlossomos/images/mainimage.jpg";
import s from "./LumiBlossomos.module.css";

export const LumiBlossomos = () => {
  return (
    <div>
      <div>
        <img className={s.mainImage} src={mainImage} alt="mainimage" />
      </div>
      <div>
        <h3 className={s.header}>
          Welcome spring with new scented candles with over 10 scents to choose
          from, your home will be ready to welcome the season.
        </h3>
      </div>
    </div>
  );
};
