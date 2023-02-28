export const FilterButtons = ({ filter }) => {
  return (
    <div>
      <button onClick={() => filter("unscented")}>Unscented canlde</button>
      <button onClick={() => filter("wood")}>Wood scent canlde</button>
      <button onClick={() => filter("berries")}>Berries scent canlde</button>
    </div>
  );
};
