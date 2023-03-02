import s from "./NewArrivals.module.css";
import image01 from "../images/image01.jpg";
import image02 from "../images/image02.jpg";
import image00 from "../images/image00.jpg";

export const NewArrivals = ({ newArrivals }) => {
  return (
    <div>
      <div className={s.headerContainer}>
        <h2 className={s.headerOne}>JOIN THE COLLECTIVE</h2>
        <h2>#CANDLEARIASTORE</h2>
        <h2>@CANDLEARIASTOREVIBES</h2>
      </div>
      <div>
        <img className={s.mainImage} src={image00} alt="flower" />
      </div>
      <h2>There’s plenty more to look forward to!</h2>
      <div className={s.container}>
        {newArrivals.map((item) => {
          const { id, img, description, par } = item;
          return (
            <div key={id}>
              <div className={s.imageContainer}>
                <img className={s.img} src={img} alt="flower" />
                <h4>{description}</h4>
                <h5>{par}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
