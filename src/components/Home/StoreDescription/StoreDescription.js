import s from "./StoreDescription.module.css";

export const StoreDescription = ({ availability }) => {
  return (
    <div className={s.block}>
      <div>
        <h1 className={s.pageHeader}>FIND YOUR FRAGRANCE</h1>
      </div>
      <div className={s.page}>
        {availability.map((item) => {
          const { id, img, name, description } = item;
          return (
            <div key={id} className={s.page}>
              <div className={s.container}>
                <div>
                  <img className={s.image} src={img} alt="Availability" />
                </div>
                <div>
                  <h3 className={s.header}>{name}</h3>
                </div>
                <div>
                  <p className={s.description}>{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
