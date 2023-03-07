import { useState } from "react";
import { HomePageCarousel } from "./HomePageCarousel/HomePageCarousel";
import s from "./Home.module.css";
import { Programs } from "./Programs/Programs";
import { programs } from "../../data";

export const Home = () => {
  const [images, setImages] = useState(0);

  const [program, setPrograms] = useState(programs);

  return (
    <div>
      <HomePageCarousel images={images} setImages={setImages} />
      <Programs program={program} />
    </div>
  );
};
