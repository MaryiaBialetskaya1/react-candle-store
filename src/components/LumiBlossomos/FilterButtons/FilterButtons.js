import s from "./FilterButtons.module.css";

export const FilterButtons = ({ filter }) => {
  return (
    <div className={s.buttonWrapper}>
      <button
        className={`${s.btn} ${s.fill}`}
        onClick={() => filter("unscented")}
      >
        Unscented canlde
      </button>
      <button className={`${s.btn} ${s.fill}`} onClick={() => filter("wood")}>
        Wood scent canlde
      </button>
      <button
        className={`${s.btn} ${s.fill}`}
        onClick={() => filter("berries")}
      >
        Berries scent canlde
      </button>
    </div>
  );
};
