import s from "./NewArrivals.module.css";
import image01 from "../images/image01.jpg";
import image02 from "../images/image02.jpg";

export const NewArrivals = () => {
  return (
    <div>
      <div className={s.section}>
        <h2>There’s plenty more to look forward to!</h2>
        <div>
          <div>
            <img className={s.img} src={image01} alt="flower" />
            <h4>Easter scent is coming!</h4>
            <h5>We’ve got the right fragrances for the every day.</h5>
          </div>
          <div>
            <img className={s.img} src={image02} alt="flower" />
            <h4>Be the first to know!</h4>
            <h5>Members get discount and early access to our new Scents.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
