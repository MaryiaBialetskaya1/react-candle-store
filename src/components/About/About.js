import s from "./About.module.css";
import { useState } from "react";
import { aboutCards } from "../../data";
import ScrollButton from "./Scroll/Scroll";
import { Cards } from "./Cards/Cards";

export const About = () => {
  const [about] = useState(aboutCards);
  const [showText, setShowMoreText] = useState(false);
  const showMoreAndLessText = (element) => {
    element.showMore = !element.showMore;
    setShowMoreText(!showText);
  };
  return (
    <div>
      <div className={s.imageContainer}>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1608085021802-e886468f5fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhbmRsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="candle"
        />
        <div className={s.textContainer}>
          <h3 className={s.header}>CandleriaStore® </h3>
          <p className={s.paragraph}>A Story of Sophistication</p>
        </div>
      </div>
      <div className={s.pageHeaderContainer}>
        <h2 className={s.pageHeader}>Our Way</h2>
      </div>
      <Cards about={about} showMoreAndLessText={showMoreAndLessText} />
      <ScrollButton />
    </div>
  );
};
