import s from "./Programs.module.css";

export const Programs = ({ program }) => {
  return (
    <div className={s.container}>
      {program.map((item) => {
        const { id, img, heading, description } = item;
        return (
          <div>
            <div key={id}>
              <div>
                <img src={img} className={s.img} alt="program" />
              </div>
              <div>
                <h3>{heading}</h3>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
