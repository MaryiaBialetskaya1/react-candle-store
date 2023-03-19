import { useState } from "react";
import { HomePageCarousel } from "./HomePageCarousel/HomePageCarousel";
import s from "./Home.module.css";
import { Programs } from "./Programs/Programs";
import { programs } from "../../data";
import { StoreDescription } from "./StoreDescription/StoreDescription";
import { storeAvailability } from "../../data";
import { Reviews } from "./Reviews/Reviews";
import { reviews } from "../../data";

export const Home = () => {
  const [images, setImages] = useState(0);
  const [program] = useState(programs);
  const [availability] = useState(storeAvailability);
  const [review, setReview] = useState(reviews);

  return (
    <div>
      <HomePageCarousel images={images} setImages={setImages} />
      <StoreDescription availability={availability} />
      <Reviews review={review} />
      <Programs program={program} />
    </div>
  );
};
