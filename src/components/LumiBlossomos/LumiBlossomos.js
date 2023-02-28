import mainImage from "../LumiBlossomos/images/mainimage.jpg";
import s from "./LumiBlossomos.module.css";

export const LumiBlossomos = () => {
  return (
    <div>
      <div>
        <img className={s.mainImage} src={mainImage} alt="mainimage" />
      </div>
    </div>
  );
};
