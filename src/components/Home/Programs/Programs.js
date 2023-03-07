export const Programs = ({ program }) => {
  return (
    <div>
      {program.map((item) => {
        const { id, img, heading, description } = item;
        return (
          <div>
            <div key={id}>
              <div>
                <img src={img} alt="program" />
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
