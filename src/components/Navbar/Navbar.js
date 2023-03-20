import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Home
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="lumiblossomos"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Lumi Blossomos
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="about"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};
