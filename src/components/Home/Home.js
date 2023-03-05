import { useState } from "react";
import { CarouselData } from "../../data";
import s from "./Home.module.css";

export const Home = () => {
  const [images, setImages] = useState(2);
  const { id, img } = CarouselData[images];

  return (
    <div key={id}>
      <div className={s.carousel}>
        <div>
          <img src={img} className={s.item} alt="candles" />
        </div>
        <button className={s.prev}>Prev</button>
        <button className={s.next}>Next</button>
      </div>
    </div>
  );
};
