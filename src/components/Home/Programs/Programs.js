import s from "./Programs.module.css";

export const Programs = ({ program }) => {
  return (
    <div className={s.pageContainer}>
      <div>
        <h3>Candlearia Store Programs</h3>
      </div>
      <div className={s.container}>
        {program.map((item) => {
          const { id, img, heading, description } = item;
          return (
            <div className={s.article}>
              <div className={s.wrap}>
                <div className={s.figure}>
                  <img src={img} className={s.img} alt="program" />
                </div>
                <div className={s.articleBody}>
                  <h3 className={s.header}>{heading}</h3>
                  <p className={s.paragraph}>{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
