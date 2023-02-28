import mainImage from "../LumiBlossomos/images/mainimage.jpg";
import { CandlesStore } from "./CandleStore/CandleStore";
import { FilterButtons } from "./FilterButtons/FilterButtons";
import s from "./LumiBlossomos.module.css";
import { data } from "../../data";
import { useState } from "react";

export const LumiBlossomos = () => {
  const [store, setStore] = useState(data);

  const onFilter = (searchNameTerm) => {
    const newArrayOfFilteredItems = data.filter(
      (item) => item.searchNameTerm === searchNameTerm
    );
    setStore(newArrayOfFilteredItems);
  };

  return (
    <div>
      <div>
        <img className={s.mainImage} src={mainImage} alt="mainimage" />
      </div>
      <div>
        <h3 className={s.header}>
          Welcome spring with new scented candles with over 10 scents to choose
          from, your home will be ready to welcome the season.
        </h3>
      </div>
      <FilterButtons filter={onFilter} />
      <CandlesStore candlesStore={store} />
    </div>
  );
};
