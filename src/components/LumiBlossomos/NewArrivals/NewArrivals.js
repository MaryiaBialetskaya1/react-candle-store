import s from "./NewArrivals.module.css";
import image00 from "../images/image00.jpg";

export const NewArrivals = ({ newArrivals }) => {
  return (
    <div>
      <div className={s.headerContainer}>
        <h2 className={s.headerOne}>JOIN THE COLLECTIVE</h2>
        <h2 className={s.headerTwo}>#CANDLEARIASTORE</h2>
        <h2 className={s.headerThree}>@CANDLEARIASTOREVIBES</h2>
      </div>
      <div>
        <img className={s.mainImage} src={image00} alt="flower" />
      </div>
      <div className={s.headerContainer}>
        <h2 className={s.headerFour}>
          There’s plenty more to look forward to!
        </h2>
        <h4 className={s.par}>
          This is a magical time - the weekend ... this is your way of life,
          your way of thinking. A little mess in the orderly system of duties
          and we give you a way to get a boost of energy and improve your mood.
        </h4>
      </div>

      <div className={s.container}>
        {newArrivals.map((item) => {
          const { id, img, description, par } = item;
          return (
            <div key={id}>
              <div className={s.imageContainer}>
                <img className={s.img} src={img} alt="flower" />
                <h4 className={s.description}>{description}</h4>
                <h5 className={s.imgParagraph}>{par}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
