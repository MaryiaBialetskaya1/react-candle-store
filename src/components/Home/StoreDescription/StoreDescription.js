export const StoreDescription = ({ storeAvailability }) => {
  return (
    <div>
      <h1>Store Description</h1>
      {storeAvailability.map((item) => {
        const { id, img, name, description } = item;
        return (
          <div key={id}>
            <div>
              <img src={img} alt="Availability" />
            </div>
            <div>
              <h3>{name}</h3>
            </div>
            <div>
              <h4>{description}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
