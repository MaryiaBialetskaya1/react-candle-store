import s from "./Reviews.module.css";

export const Reviews = ({ review }) => {
  return (
    <div className={s.wrap}>
      <div className={s.page}>
        {review.map((item) => {
          const { id, img, name, description } = item;
          return (
            <div key={id} className={s.container}>
              <div>
                <img className={s.img} src={img} alt="portrait" />
              </div>
              <div>
                <h3 className={s.name}>{name}</h3>
              </div>
              <div className={s.descriptionContainer}>
                <p className={s.description}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
