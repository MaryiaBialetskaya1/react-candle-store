import { useState } from "react";
import { CarouselData } from "../../data";

export const Home = () => {
  const [images, setImages] = useState(0);
  const { id, img } = CarouselData[images];

  return (
    <div key={id}>
      <button>Prev</button>
      <img src={img} alt="candles" width="300px" />
      <button>Next</button>
    </div>
  );
};
