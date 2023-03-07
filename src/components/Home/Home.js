import { useState } from "react";
import { HomePageCarousel } from "./HomePageCarousel/HomePageCarousel";
import s from "./Home.module.css";

export const Home = () => {
  const [images, setImages] = useState(0);

  return (
    <div>
      <HomePageCarousel images={images} setImages={setImages} />
    </div>
  );
};
