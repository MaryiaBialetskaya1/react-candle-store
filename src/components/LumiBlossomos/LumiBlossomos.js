import mainImage from "../LumiBlossomos/images/mainimage.jpg";
import { CandlesStore } from "./CandleStore/CandleStore";
import { FilterButtons } from "./FilterButtons/FilterButtons";
import s from "./LumiBlossomos.module.css";
import { data } from "../../data";
import { newArrivals } from "../../data";
import { useState } from "react";
import { NewArrivals } from "./NewArrivals/NewArrivals";
import { TextCarousel } from "./TextCarousel/TextCarousel";

export const LumiBlossomos = () => {
  const [store, setStore] = useState(data);
  const [arrivals] = useState(newArrivals);

  const [text, setText] = useState(0);

  const onFilter = (searchNameTerm) => {
    const newArrayOfFilteredItems = data.filter(
      (item) => item.searchNameTerm === searchNameTerm
    );
    setStore(newArrayOfFilteredItems);
  };

  return (
    <div>
      <TextCarousel text={text} setText={setText} />
      <div className={s.imageContainer}>
        <img className={s.mainImage} src={mainImage} alt="mainimage" />
      </div>
      <div className={s.headerContainer}>
        <h3 className={s.header}>
          Welcome spring with new scented candles with over 10 scents to choose
          from, your home will be ready to welcome the season.
        </h3>
      </div>
      <div>
        <h3 className={s.headerOne}>EXPLORE </h3>
        <h3 className={s.headerTwo}>OUR COLLECTION</h3>
      </div>

      <FilterButtons filter={onFilter} />
      <CandlesStore candlesStore={store} />
      <NewArrivals newArrivals={arrivals} />
    </div>
  );
};
