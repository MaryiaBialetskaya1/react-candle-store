import { useState } from "react";
import { CarouselData } from "../../data";
import s from "./Home.module.css";

export const Home = () => {
  const [images, setImages] = useState(2);
  const { id, img } = CarouselData[images];

  const showPrevImage = () => {
    setImages((images) => {
      images--;
      if (images < 0) {
        return CarouselData.length - 1;
      }
      return images;
    });
  };

  const shoeNextImage = () => {
    setImages((images) => {
      images++;
      if (images > CarouselData.length - 1) {
        return (images = 0);
      }
      return images;
    });
  };

  return (
    <div key={id}>
      <div className={s.carousel}>
        <div>
          <img src={img} className={s.item} alt="candles" />
        </div>
        <button className={s.prev} onClick={showPrevImage}>
          Prev
        </button>
        <button className={s.next}>Next</button>
      </div>
    </div>
  );
};
