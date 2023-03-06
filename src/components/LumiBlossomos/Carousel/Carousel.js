import { useState } from "react";
import s from "./Carousel.module.css";
import { carouselText } from "../../../data";

export const Carousel = () => {
  const [text, setText] = useState(0);
  const { id, item } = carouselText[text];

  const nextTextItem = () => {
    setText((text) => {
      text++;
      if (text > carouselText.length - 1) {
        return (text = 0);
      }
      return text;
    });
  };

  const prevTextItem = () => {
    setText((text) => {
      text--;
      if (text < 0) {
        return carouselText.length - 1;
      }
      return text;
    });
  };

  return (
    <div key={id}>
      <p>{item}</p>
      <label
        onClick={prevTextItem}
        className={`${s.carouselControl} ${s.prev}`}
      >
        &lt;
      </label>
      <label
        onClick={nextTextItem}
        className={`${s.carouselControl} ${s.next}`}
      >
        &gt;
      </label>
    </div>
  );
};
