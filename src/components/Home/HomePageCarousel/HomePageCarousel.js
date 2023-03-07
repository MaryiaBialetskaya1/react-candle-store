import s from "../Home.module.css";
import { CarouselData } from "../../../data";

export const HomePageCarousel = ({ images, setImages }) => {
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

  const showNextImage = () => {
    setImages((images) => {
      images++;
      if (images > CarouselData.length - 1) {
        return (images = 0);
      }
      return images;
    });
  };

  return (
    <div>
      <div key={id}>
        <div className={s.carousel}>
          <div>
            <img src={img} className={s.item} alt="candles" />
          </div>
          <button
            className={`${s.carouselControl} ${s.prev}`}
            onClick={showPrevImage}
          >
            &lt;
          </button>
          <button
            className={`${s.carouselControl} ${s.next}`}
            onClick={showNextImage}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
