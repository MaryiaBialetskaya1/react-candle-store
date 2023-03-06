import { useState } from "react";
import s from "./Carousel.module.css";
import { carouselText } from "../../../data";

export const Carousel = () => {
  const [text, setText] = useState(0);
  const { id, item } = carouselText[text];

  return (
    <div>
      <h1 className={s.header}>TEXT CAROUSEL</h1>
      <p>{item}</p>
      {}
    </div>
  );
};
