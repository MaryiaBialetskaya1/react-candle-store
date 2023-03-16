//can I tarnsfer data from main component to child component like this? *transfered from LumiBlossomos.js

import s from "./TextCarousel.module.css";
import { carouselText } from "../../../data";

export const TextCarousel = ({ text, setText }) => {
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
    <div key={id} className={s.container}>
      <div>
        <p className={s.paragraph}>{item}</p>
      </div>
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
