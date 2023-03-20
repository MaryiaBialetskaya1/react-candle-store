import s from "./Scroll.module.css";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={s.buttonContainer}>
      <button onClick={scrollToTop} className={s.button}>
        Back to top &#94;
      </button>
    </div>
  );
};

export default ScrollButton;
