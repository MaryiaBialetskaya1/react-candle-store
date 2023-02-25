import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="lumiblossomos">LumiBlossomos</Link>
      <Link to="floralcandlesoul">FloralCandleSoul</Link>
      <Link to="lumicandle">LumiCandle</Link>
    </div>
  );
};
