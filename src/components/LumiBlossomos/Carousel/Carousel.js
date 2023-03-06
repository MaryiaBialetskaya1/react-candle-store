import { useState } from "react";
import s from "./Carousel.module.css";
import { carouselText } from "../../../data";

export const Carousel = () => {
  const [text, setText] = useState(0);
  const { id, item } = carouselText[text];

  return (
    <div key={id}>
      <p>{item}</p>
      <label className={`${s.carouselControl} ${s.prev}`}>&lt;</label>
      <label className={`${s.carouselControl} ${s.next}`}>&gt;</label>
    </div>
  );
};
